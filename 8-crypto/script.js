    function crypto(passw) {
        if (typeof passw !== 'string') return null;
        const arr = passw.split('');
        const firstFour = arr.slice(0, 4); 
        const lastFour = arr.slice(-4);
        firstFour.reverse(); 
        lastFour.reverse();  
        return firstFour.concat(lastFour).join('');
    }

    console.log(crypto('password'));
    function check(encrypted, original) {
        return crypto(original) === encrypted;
    }

    check('password',crypto('password'))
