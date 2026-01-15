document.addEventListener('DOMContentLoaded', () => {
    const cashOnHandInput = document.getElementById('cashOnHand');
    const pautangAmountInput = document.getElementById('pautangAmount');
    const inventorySalesInput = document.getElementById('inventorySales');
    const capitalSalesLastYearInput = document.getElementById('capitalSalesLastYear'); 
    const calculateBtn = document.getElementById('calculateBtn');
    
    // Make sure this ID matches the one in index.html
    const totalCurrentSumDisplay = document.getElementById('totalCurrentSumDisplay'); 
    const differenceAmountSpan = document.getElementById('differenceAmount'); 
    
    const balikPuhunanSpan = document.getElementById('balikPuhunan');
    const balikTangkilikSpan = document.getElementById('balikTangkilik');
    const tagapangalagaSpan = document.getElementById('tagapangalaga');
    
    const capitalSalesNowSpan = document.getElementById('capitalSalesNow'); 

    // This check is very useful! It will log an error if an ID is wrong.
    if (!cashOnHandInput || !pautangAmountInput || !inventorySalesInput || !capitalSalesLastYearInput ||
        !calculateBtn || !totalCurrentSumDisplay || !differenceAmountSpan || 
        !balikPuhunanSpan || !balikTangkilikSpan || !tagapangalagaSpan || !capitalSalesNowSpan) {
        console.error("One or more HTML elements were not found. Check your IDs in index.html and script.js!");
        return; 
    }

    calculateBtn.addEventListener('click', () => {
        console.log("Calculate button clicked!"); // Check if this message appears in console

        const cashOnHand = parseFloat(cashOnHandInput.value) || 0;
        const pautangAmount = parseFloat(pautangAmountInput.value) || 0;
        const inventorySales = parseFloat(inventorySalesInput.value) || 0;
        const capitalSalesLastYear = parseFloat(capitalSalesLastYearInput.value) || 0;

        const totalCurrentSum = cashOnHand + pautangAmount + inventorySales;
        totalCurrentSumDisplay.textContent = totalCurrentSum.toFixed(2); 

        const differenceAmount = totalCurrentSum - capitalSalesLastYear;
        differenceAmountSpan.textContent = differenceAmount.toFixed(2); 

        const balikPuhunan = differenceAmount * 0.40;  
        const balikTangkilik = differenceAmount * 0.30; 
        const tagapangalaga = differenceAmount * 0.30;  

        balikPuhunanSpan.textContent = balikPuhunan.toFixed(2);
        balikTangkilikSpan.textContent = balikTangkilik.toFixed(2);
        tagapangalagaSpan.textContent = tagapangalaga.toFixed(2);

        const capitalSalesNow = capitalSalesLastYear + balikTangkilik; 
        capitalSalesNowSpan.textContent = capitalSalesNow.toFixed(2);
    });

    const inputs = [cashOnHandInput, pautangAmountInput, inventorySalesInput, capitalSalesLastYearInput];
    inputs.forEach(input => {
        input.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                calculateBtn.click();
            }
        });
    });
});
