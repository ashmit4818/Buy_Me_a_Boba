/** 
 * @license Apache-2.0
 * @copyright 2024 https://github.com/ashmit4818
 */

'use strict';


const checkout = async (req, res) => {
    try{
        const{amount} = req.body;
    }
    catch(err){
        console.error(err);
        throw new err;
    }
} 
 
module.exports = {
    checkout
}