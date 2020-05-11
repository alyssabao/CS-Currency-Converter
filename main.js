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
