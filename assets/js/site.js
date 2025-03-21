/*  gode ideer og tips:

hvis du vil begrænse antallet af decimaler på dit resultat, så brug methoden toFixed(antal decimaler)  eks.  result.toFixed(2) giver et resultat med 2 decimaler

hvis du vil have navnet på din valuta med fra options i dit select tag, så undersøg denne linje...
 let myCurrency = mySelectElement.options[mySelectElement.selectedIndex].innerText
 prøv evt. at consol logge mySelectElement.options, hvor mySelectElement er det select element du har fundet i din DOM med getElementById()

 */

 document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("convert").addEventListener("click", function () {
        let amount = parseFloat(document.getElementById("amount").value);
        let currency = document.getElementById("currency").value;
        let resultElement = document.getElementById("result");

        if (isNaN(amount) || amount <= 0) {
            resultElement.textContent = "Indtast et gyldigt beløb";
            return;
        }

        let exchangeRates = {
            "EUR": 0.13,
            "USD": 0.15,
            "GBP": 0.11
        };

        let convertedAmount = amount * (exchangeRates[currency] || 1);
        resultElement.textContent = convertedAmount.toFixed(2) + " " + currency;
    });
});
