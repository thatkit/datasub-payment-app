export const isStringLength = (str, length) => {
    return [
        str.length === length,
        `The number must contain ${length} digits`
    ];
}

export const isNumber = str => {
    return [
        str.split('').every(char => !isNaN(char)),
        'Please, use only digits'
    ];
}

export const isCorrectMMYYYFormat = str => {
    let isCorrect = [false, 'Please, insert a correct date'];
    // is there '/'?
    if (!str.includes('/')) return isCorrect;
    const strArr = str.split('/');
    // is there only one '/'?
    if (strArr.length !== 2) return isCorrect;
    // are both MM & YYYY 2 and 4 chars long?
    if (strArr[0].length !== 2 || strArr[1].length !== 4) return isCorrect;
    // is a number?
    if (!strArr.every(chars => !isNaN(chars))) return isCorrect; 
    // is month between 1 and 12?
    if (Number(strArr[0]) > 12 || Number(strArr[0]) < 1) return isCorrect;
    // is expiry year no more than 100 years from now?
    if (Number(strArr[1]) > new Date().getFullYear() + 100) return isCorrect;
    
    return [true, 'Please, insert a correct date'];
}

export const isTwoDigitsAfterDecimalPoint = amount => {
    let isCorrect = [true, 'The amount must contain only two digits after the decimal point']

    if (Number.isInteger(amount)) return isCorrect;

    const digitsAfterPoint = amount.toString().split('.')[1];
    if (digitsAfterPoint.length <= 2) return isCorrect;

    return [false, 'The amount must contain only two digits after the decimal point'];
}

export const isNotExpired = date => {
    const expDateArr = date.split('/').map(char => Number(char));
    const expDate = new Date().setFullYear(expDateArr[1], expDateArr[0], 0);

    const today = new Date();

    return [today <= expDate, 'The card is expired'];
}