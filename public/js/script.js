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

    
    
})();