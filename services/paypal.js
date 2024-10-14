/**
 * @license Apache-2.0
 * @copyright 2024 https://github.com/ashmit4818
 */         

'use strict';

const axios = require('axios')

//function to generate access token to make api calls to paypal orders api
async function generateAccessToken() {
    const response = await axios({
        url: process.env.PAYPAL_BASE_URL + '/v1/oauth2/token',
        method: 'post',
        data: 'grant_type=client_credentials',
        auth: {
            username: process.env.PAYPAL_CLIENT_ID,
            password: process.env.PAYPAL_SECRET
        }
    })


    

    return response.data.access_token
}

exports.createOrder = async () => {
    const accessToken = await generateAccessToken()
    

    const response = await axios({
        url: process.env.PAYPAL_BASE_URL + '/v2/checkout/orders',
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + accessToken
        },
        data: JSON.stringify({
            intent: 'CAPTURE',
            purchase_units: [
                {
                    items: [
                        {
                            name: 'Boba Tea',
                            description: 'A lovely donation to our favourite developer',
                            quantity: 1,
                            unit_amount: {
                                currency_code: 'USD',
                                value: '10.00',
                            }
                        }
                    ],

                    amount: {
                        currency_code: 'USD',
                        value: '10.00',
                        breakdown: {
                            item_total: {
                                currency_code: 'USD',
                                value: '10.00',
                            }
                        }
                    }
                }
            ],

            //used to specify properties to improve buyer experience
            application_context: {
                return_url: process.env.BASE_URL + '/complete-order',
                cancel_url: process.env.BASE_URL + '/cancel-order',
                //as digital asset no shipping
                shipping_preference: 'NO_SHIPPING',
                user_action: 'PAY_NOW',
                brand_name: 'Buy Me A Boba',
            }
        })
    })

    return response.data.links.find(link => link.rel === 'approve').href
}

exports.capturePayment = async (orderId) => {
    const accessToken = await generateAccessToken()

    const response = await axios({
        url: process.env.PAYPAL_BASE_URL + `/v2/checkout/orders/${orderId}/capture`,
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + accessToken
        }
    })

    return response.data
}