export function split3Digits(n) {
    let number = n / 10;
    if (number <= 999) {
        return number
    }
    number += '';
    number = number.replace(',', '');
    let x = number.split('.');
    let y = x[0];
    let z = x.length > 1 ? '.' + x[1] : '';
    const rgx = /(\d+)(\d{3})/;
    while (rgx.test(y))
        y = y.replace(rgx, '$1' + ',' + '$2');
    return y + z;
}

export function calculateDiscountPercentage(selling, rrp) {
    return Math.floor((1 - selling / rrp) * 100)
}