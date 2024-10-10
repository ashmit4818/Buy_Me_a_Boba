/**
 * @license Apache-2.0
 * @copyright 2024 https://github.com/ashmit4818
 */         

'use strict';

/**
 * node modules
 */
const express = require('express');
const helmet = require('helmet');
require('dotenv').config();

/**
 * routes
 */
const home = require('./src/routes/home.route');
const checkout = require('./src/routes/checkout.route');


/**
 * initial express app
 */  
const app = express();

/**
 * set ejs view engine
 */
app.set('view engine', 'ejs');

/**
 * setting public folder
 */
app.use(express.static(`${__dirname}/public`));

/**
 * setting http response secure headers 
 */
app.use(helmet());

/**
 * parse request body
 */
app.use(express.urlencoded({ extended: true }));


/** 
 * home route   
 */
app.use('/', home);

/**
 * checkout
 */

app.use('/checkout', checkout);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
})