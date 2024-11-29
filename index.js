async function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const result = document.getElementById('result');
    
    result.classList.add('loading');
    result.textContent = 'Convertendo...';
}