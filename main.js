const ratioUsdToVnd = 23400.5;
const ratioEurToVnd = 25331.28;
const ratioEurToUsd = 1.08;

function vndToUsd(amountVnd) {
    return ((amountVnd / ratioUsdToVnd).toFixed(2));
}

function vndToEur(amountVnd) {
    return ((amountVnd / ratioEurToVnd).toFixed(2));
}

function eurToVnd(amountEur) {
    return (amountEur * ratioEurToVnd);
}

function eurToUsd(amountEur) {
    return (amountEur * ratioEurToUsd);
}

function usdToVnd(amountUsd) {
    return (amountUsd * ratioUsdToVnd);
}

function usdToEur(amountUsd) {
    return (amountUsd / ratioEurToUsd);
}

function formatUsd(type, value) {
    const formatter = new Intl.NumberFormat(type, {
      currency: 'USD',
      style: "currency"
    });
    return formatter.format(value);
  }
  
  function formatVnd(type, value) {
    const formatter = new Intl.NumberFormat(type, {
      currency: 'VND',
      style: "currency"
    });
    return formatter.format(value);
  }
  
  function formatEur(type, value) {
    const formatter = new Intl.NumberFormat(type, {
      currency: 'EUR',
      style: "currency"
    });
    return formatter.format(value);
  }

  let fromCurrency = prompt("Which currency do you currently have? VND, USD, or EUR?");
  let amount = prompt("How much money do you want to convert?")
  let toCurrency = prompt("Which currency would you like to convert to? VND, USD, or EUR?")

if (fromCurrency === "VND" && toCurrency === "USD") {
    text =amount + " "+ fromCurrency + " in " + toCurrency + " is  " + formatUsd('en-US',vndToUsd(amount))
}
else if (fromCurrency === "VND" && toCurrency === "EUR") {
    text =amount + " "+ fromCurrency + " in " + toCurrency + " is  " + formatEur('de-DE',vndToEur(amount))
}
else if (fromCurrency === "EUR" && toCurrency === "VND") {
    text =amount + " "+ fromCurrency + " in " + toCurrency + " is  " + formatVnd('vi-VN',eurToVnd(amount))
}
else if (fromCurrency === "EUR" && toCurrency === "USD") {
    text =amount + " "+ fromCurrency + " in " + toCurrency + " is  " + formatUsd('en-US',eurToUsd(amount))
}
else if (fromCurrency === "USD" && toCurrency === "VND") {
    text =amount + " "+ fromCurrency + " in " + toCurrency + " is  " + formatVnd('vi-VN',usdToVnd(amount))
}
else if (fromCurrency === "USD" && toCurrency === "EUR") {
    text =amount + " "+ fromCurrency + " in " + toCurrency + " is  " + formatEur('de-DE',usdToEur(amount))
}


