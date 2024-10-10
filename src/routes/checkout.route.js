/**
 * @license Apache-2.0
 * @copyright 2024 https://github.com/ashmit4818
 */ 
'use strict'

/**
 * node modules
 */

const router = require('express').Router();

/**
 *  custom modules
 */
const { checkout } = require('../controllers/checkout.controller');

router.post('/', checkout)
module.exports = router ;