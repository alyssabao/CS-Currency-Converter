const ratioUsdToVnd = 23400.5;
const ratioEurToVnd = 25331.28;
const ratioEurToUsd = 1.08;
let result = 0;
let formatAmount = "";
let fromCurrency = prompt("Which currency do you currently have? VND, USD, or EUR?");
let toCurrency = prompt("Which currency would you like to convert to? VND, USD, or EUR?")
let amount = prompt("How much money do you want to convert?")
let checkNumber = parseInt(amount)

function vndToUsd() {
    return (amount / ratioUsdToVnd);
}

function vndToEur() {
    return (amount / ratioEurToVnd);
}

function eurToVnd() {
    return (amount * ratioEurToVnd);
}

function eurToUsd() {
    return (amount * ratioEurToUsd);
}

function usdToVnd() {
    return (amount * ratioUsdToVnd);
}

function usdToEur() {
    return (amount / ratioEurToUsd);
}

function formatCurrency(type, value) {
    const formatter = new Intl.NumberFormat(type, {
        currency: type,
        style: "currency"
    });
    return formatter.format(value);
}

function converter() {
    fromCurrency = fromCurrency.toUpperCase();
    toCurrency = toCurrency.toUpperCase();
        if (Object.is(checkNumber, NaN)) {
            alert("Please input a valid number.")
            return;
        } else if (fromCurrency === "VND" && toCurrency === "USD") {
            result = vndToUsd()
        } else if (fromCurrency === "VND" && toCurrency === "EUR") {
            result = vndToEur()
        } else if (fromCurrency === "EUR" && toCurrency === "VND") {
            result = eurToVnd()
        } else if (fromCurrency === "EUR" && toCurrency === "USD") {
            result = eurToUsd()
        } else if (fromCurrency === "USD" && toCurrency === "VND") {
            result = usdToVnd()
        } else if (fromCurrency === "USD" && toCurrency === "EUR") {
            result = usdToEur()
        } else {
            alert("Sorry, your currency is not supported. Please refresh and try again.")
            return;
        }
        formatAmount = formatCurrency(toCurrency, result)
        alert("The converted amount is: " + formatAmount);
    }

converter()