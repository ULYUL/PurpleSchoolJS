function crypto(passw) {
    if (typeof passw !== 'string') return undefined;
    
    const firstPart = passw.slice(0, 4).split('').reverse().join('');
    const lastPart = passw.slice(4).split('').reverse().join('');
    
    return firstPart + lastPart;
}

function decrypt(encrypted) {
    return crypto(encrypted);
}

function check(encrypted, original) {
    return decrypt(encrypted) === original;
}

// Тесты
crypto('password')
decrypt('ssapdorw');
check('ssapdorw', 'password');