document.addEventListener('DOMContentLoaded', () => {
    const cashOnHandInput = document.getElementById('cashOnHand');
    const pautangAmountInput = document.getElementById('pautangAmount');
    const inventorySalesInput = document.getElementById('inventorySales');
    const calculateBtn = document.getElementById('calculateBtn');
    const totalSumSpan = document.getElementById('totalSum');
    const tangkilikSpan = document.getElementById('tangkilik');
    const puhunanSpan = document.getElementById('puhunan');
    const tagapangalagaSpan = document.getElementById('tagapangalaga');

    calculateBtn.addEventListener('click', () => {
        const cashOnHand = parseFloat(cashOnHandInput.value) || 0;
        const pautangAmount = parseFloat(pautangAmountInput.value) || 0;
        const inventorySales = parseFloat(inventorySalesInput.value) || 0;

        const totalSum = cashOnHand + pautangAmount + inventorySales;
        const tangkilik = totalSum * 0.40;
        const puhunan = totalSum * 0.40;
        const tagapangalaga = totalSum * 0.20;

        totalSumSpan.textContent = totalSum.toFixed(2);
        tangkilikSpan.textContent = tangkilik.toFixed(2);
        puhunanSpan.textContent = puhunan.toFixed(2);
        tagapangalagaSpan.textContent = tagapangalaga.toFixed(2);
    });
});
