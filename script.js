document.addEventListener('DOMContentLoaded', () => {
    // Get references to all input and display elements
    const cashOnHandInput = document.getElementById('cashOnHand');
    const pautangAmountInput = document.getElementById('pautangAmount');
    const inventorySalesInput = document.getElementById('inventorySales');
    const capitalSalesLastYearInput = document.getElementById('capitalSalesLastYear'); 
    const calculateBtn = document.getElementById('calculateBtn');
    
    // Existing output spans (renamed totalCurrentSumDisplay for clarity and correct matching)
    const totalCurrentSumDisplay = document.getElementById('totalCurrentSumDisplay'); // CHANGED ID
    const differenceAmountSpan = document.getElementById('differenceAmount'); 
    
    // New percentage output spans
    const balikPuhunanSpan = document.getElementById('balikPuhunan');
    const balikTangkilikSpan = document.getElementById('balikTangkilik');
    const tagapangalagaSpan = document.getElementById('tagapangalaga');
    
    const capitalSalesNowSpan = document.getElementById('capitalSalesNow'); 

    // Optional: Basic check if all elements are found (useful for debugging HTML ID issues)
    if (!cashOnHandInput || !pautangAmountInput || !inventorySalesInput || !capitalSalesLastYearInput ||
        !calculateBtn || !totalCurrentSumDisplay || !differenceAmountSpan || // CHANGED ID
        !balikPuhunanSpan || !balikTangkilikSpan || !tagapangalagaSpan || !capitalSalesNowSpan) {
        console.error("One or more HTML elements were not found. Check your IDs in index.html and script.js!");
        // alert("There was an error loading the calculator. Please contact support.");
        return; // Stop execution if critical elements are missing
    }

    calculateBtn.addEventListener('click', () => {
        console.log("Calculate button clicked!");

        // 1. Get values from inputs
        const cashOnHand = parseFloat(cashOnHandInput.value) || 0;
        const pautangAmount = parseFloat(pautangAmountInput.value) || 0;
        const inventorySales = parseFloat(inventorySalesInput.value) || 0;
        const capitalSalesLastYear = parseFloat(capitalSalesLastYearInput.value) || 0;

        console.log(`Inputs: Cash on Hand=${cashOnHand}, Pautang=${pautangAmount}, Sales=${inventorySales}, Capital Last Year=${capitalSalesLastYear}`);

        // 2. Calculate Total Current Sum
        const totalCurrentSum = cashOnHand + pautangAmount + inventorySales;
        totalCurrentSumDisplay.textContent = totalCurrentSum.toFixed(2); // Display this sum (CHANGED VARIABLE)

        // 3. Calculate the Difference
        const differenceAmount = totalCurrentSum - capitalSalesLastYear;
        differenceAmountSpan.textContent = differenceAmount.toFixed(2); // Display this difference

        console.log(`Total Current Sum: ${totalCurrentSum.toFixed(2)}, Difference: ${differenceAmount.toFixed(2)}`);

        // 4. Compute percentages based on the DIFFERENCE
        const balikPuhunan = differenceAmount * 0.40;  // 40% of the difference
        const balikTangkilik = differenceAmount * 0.30; // 30% of the difference
        const tagapangalaga = differenceAmount * 0.30;  // 30% of the difference

        // 5. Update the percentage display spans
        balikPuhunanSpan.textContent = balikPuhunan.toFixed(2);
        balikTangkilikSpan.textContent = balikTangkilik.toFixed(2);
        tagapangalagaSpan.textContent = tagapangalaga.toFixed(2);

        console.log(`Balik Puhunan: ${balikPuhunan.toFixed(2)}, Balik Tangkilik: ${balikTangkilik.toFixed(2)}, Tagapangalaga: ${tagapangalaga.toFixed(2)}`);

        // 6. Calculate and display "Capital Sales Now"
        // ASSUMPTION: Capital Sales Now refers to the total current sum.
        // If you intended a different calculation, please clarify.
        const capitalSalesNow = totalCurrentSum; // SIMPLIFIED: Represents the current total assets/sales
        capitalSalesNowSpan.textContent = capitalSalesNow.toFixed(2);

        console.log(`Capital Sales Now: ${capitalSalesNow.toFixed(2)}`);
    });

    // Optional: Add listeners to input fields to trigger recalculation on Enter key press
    const inputs = [cashOnHandInput, pautangAmountInput, inventorySalesInput, capitalSalesLastYearInput];
    inputs.forEach(input => {
        input.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                calculateBtn.click();
            }
        });
    });
});
