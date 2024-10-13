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

        res.send('Boba Donated successfully')
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