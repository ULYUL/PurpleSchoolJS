function crypto(passw) {
    if (typeof passw !== 'string') return 'Ошибка';
    const arr = passw.split('');
    const lastFour = arr.splice(-4);
    lastFour.reverse();
    return arr.concat(lastFour).join('');
}

function check(original, encrypted) {
    return crypto(original) === encrypted;
}


const original = 'password';
const encrypted = crypto(original);
console.log(check(original,encrypted))