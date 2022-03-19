const isStringLength = (str, length) => str.length === length;

const isNumber = str => str
    .split('')
    .every(char => !isNaN(char));

const isCorrectMMYYYFormat = str => {
    // is there '/'?
    if (!str.includes('/')) return false;
    const strArr = str.split('/');
    // is there only one '/'?
    if (strArr.length !== 2) return false;
    // are both MM & YYYY 2 and 4 chars long?
    if (strArr[0].length !== 2 || strArr[1].length !== 4) return false;
    // is a number?
    if (!strArr.every(chars => !isNaN(chars))) return false; 
    // is month between 1 and 12?
    if (Number(strArr[0]) > 12 || Number(strArr[0]) < 1) return false;
    // is expiry year no more than 100 years from now?
    if (Number(strArr[1]) > new Date().getFullYear() + 100) return false;
    
    return true;
}

const isTwoDigitsAfterDecimalPoint = amount => {
    if (Number.isInteger(amount)) return true;

    const digitsAfterPoint = amount.toString().split('.')[1];
    if (digitsAfterPoint.length <= 2) return true;

    return false;
}

const isNotExpired = date => {
    const expDateArr = date.split('/').map(char => Number(char));
    const expDate = new Date().setFullYear(expDateArr[1], expDateArr[0], 0);

    const today = new Date();

    return today <= expDate;
}

module.exports = {
    isStringLength,
    isNumber,
    isCorrectMMYYYFormat,
    isNotExpired,
    isTwoDigitsAfterDecimalPoint
}