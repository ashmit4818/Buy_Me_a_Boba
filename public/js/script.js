/**
 * @license Apache-2.0
 * @copyright 2024 https://github.com/ashmit4818
 */         

'use strict';

(function() {

    const /** @type {HTMLElement} */ $decrementBtn = document.querySelector('[data-decrement-btn]');
    const /** @type {HTMLElement} */ $incrementBtn = document.querySelector('[data-increment-btn]');
    const /** @type {HTMLElement} */ $counterField = document.querySelector('[data-counter-field]');
    
    const /** @type {HTMLElement} */ $total = document.querySelector('[data-total]');
    const minValue = 1;
    const maxValue = 999;

    $decrementBtn.addEventListener('click', function() {
        
        const currentValue = $counterField.value;
        if(currentValue > minValue) {
            $counterField.value = Number(currentValue) - 1;
            
        }
        updateTotal.call($counterField);
    });

    $incrementBtn.addEventListener('click', function() {
        console.log($counterField.value)
        const currentValue = $counterField.value;
        if(currentValue < maxValue) {
            $counterField.value = Number(currentValue) + 1;
            
        }
        updateTotal.call($counterField);
    });

    const updateTotal = function() {
        $total.textContent = this.value;
    }

    $counterField.addEventListener('input', updateTotal.bind($counterField));

    /**
     * submit contribute form
     */

    const /** @type {HTMLElement} */ contributeForm = document.querySelector('[data-contribute-form]');
    const /** @type {HTMLElement} */ submitBtn = document.querySelector('[data-submit-btn]');

    contributeForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        try{
            submitBtn.setAttribute('disabled', '');
            
            //3 data form field
            const formFields = document.querySelectorAll('[data-form-field]');

            const formData ={}

            formFields.forEach(item => {
                formData[item.getAttribute('name')] = item.value.trim();
            })

            const response = await fetch('/checkout', {
                method: 'POST',
                body: new URLSearchParams(formData).toString(),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });

            if(response.ok) {
                const responseData = await response.json();
                console.log(responseData);
            }else{
                console.error('Form submission failed: ', response.statusText);
            }


        }catch(err){
            console.error(err);
            throw err;
        }finally{
            submitBtn.removeAttribute('disabled', '');
        }
    })

    
})();