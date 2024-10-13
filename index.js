/**
 * @license Apache-2.0
 * @copyright 2024 https://github.com/ashmit4818
 */         

'use strict';

require('dotenv').config()
const express = require('express')
const paypal = require('./services/paypal')

const app = express()



app.set('view engine', 'ejs')


app.use(express.static(`${__dirname}/public`));

app.get('/', (req, res) => {
    res.render('index')
})

app.post('/pay', async(req, res) => {
    try {
        const url = await paypal.createOrder()

        res.redirect(url)
    } catch (error) {
        res.send('Error: ' + error)
    }
})

app.get('/complete-order', async (req, res) => {
    try {
        await paypal.capturePayment(req.query.token)

        

        // Send the HTML response
        res.send(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <title>Order Confirmation - BuyMeABoba</title>
                <link rel="stylesheet" href="/css/style.css"> 
            </head>
            <body class="background on-surface-text">
                <header class="top-bar">
                    <div class="container">
                        <a href="/" class="logo">
                            <img src="/images/bobaaa.png" width="120" alt="Buy Me a Boba logo">
                        </a>
                    </div>
                </header>
                <main class="main">
                    <article>
                        <section class="container">
                            <h1 class="title-large">Thank You for Your Contribution!</h1>
                            <p class="body-medium">Your order has been processed successfully.</p>
                            
                            <div class="button-container">
                                <a href="/" class="button filled label-large">Go Back</a>
                            </div>
                        </section>
                    </article>
                </main>
                <footer class="footer">
                    <div class="container">
                        <p class="body-medium on-surface-variant-text">&copy; 2024 Buy Me A Boba</p>
                    </div>
                </footer>
            </body>
            </html>
        `);
    } catch (error) {
        res.send('Error: ' + error)
    }
})

app.get('/cancel-order', (req, res) => {
    res.redirect('/')
})

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  })