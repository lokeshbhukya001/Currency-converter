document.getElementById('convertButton').addEventListener('click', function() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    const exchangeRates = {
        USD: { USD: 1, EUR: 0.96, GBP: 0.80, INR: 85.2 },
        EUR: { USD: 1.04, EUR: 1, GBP: 0.83, INR: 87.8 },
        GBP: { USD: 1.25, EUR: 1.20, GBP: 1, INR: 102.5 },
        INR: { USD: 0.012, EUR: 0.011, GBP: 0.0098, INR: 1 }
        // Add more exchange rates as needed
    };

    const convertedAmount = (amount * exchangeRates[fromCurrency][toCurrency]).toFixed(2);
    document.getElementById('convertedAmount').innerText = convertedAmount;
});
