document.addEventListener('DOMContentLoaded', () => {
    // Get references to all input and display elements
    const cashOnHandInput = document.getElementById('cashOnHand');
    const pautangAmountInput = document.getElementById('pautangAmount');
    const inventorySalesInput = document.getElementById('inventorySales');
    const calculateBtn = document.getElementById('calculateBtn');
    
    const totalSumSpan = document.getElementById('totalSum');
    const tangkilikSpan = document.getElementById('tangkilik');
    const puhunanSpan = document.getElementById('puhunan');
    const tagapangalagaSpan = document.getElementById('tagapangalaga');

    // Add an event listener to the calculate button
    calculateBtn.addEventListener('click', () => {
        // Log to console for debugging - useful if nothing happens
        console.log("Calculate button clicked!");

        // Get values from inputs. Use parseFloat and default to 0 if input is empty or invalid.
        const cashOnHand = parseFloat(cashOnHandInput.value) || 0;
        const pautangAmount = parseFloat(pautangAmountInput.value) || 0;
        const inventorySales = parseFloat(inventorySalesInput.value) || 0;

        // Log input values for debugging
        console.log(`Cash on Hand: ${cashOnHand}, Pautang: ${pautangAmount}, Sales: ${inventorySales}`);

        // Perform calculations
        const totalSum = cashOnHand + pautangAmount + inventorySales;
        const tangkilik = totalSum * 0.40;
        const puhunan = totalSum * 0.40;
        const tagapangalaga = totalSum * 0.20;

        // Update the display spans with formatted results
        totalSumSpan.textContent = totalSum.toFixed(2);
        tangkilikSpan.textContent = tangkilik.toFixed(2);
        puhunanSpan.textContent = puhunan.toFixed(2);
        tagapangalagaSpan.textContent = tagapangalaga.toFixed(2);

        // Log results for debugging
        console.log(`Total Sum: ${totalSum.toFixed(2)}, Tangkilik: ${tangkilik.toFixed(2)}`);
    });

    // Optional: Add listeners to input fields to trigger recalculation on Enter key press
    // This makes the app a bit more interactive, though not strictly necessary for your issue.
    const inputs = [cashOnHandInput, pautangAmountInput, inventorySalesInput];
    inputs.forEach(input => {
        input.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                calculateBtn.click(); // Programmatically click the button
            }
        });
    });
});
