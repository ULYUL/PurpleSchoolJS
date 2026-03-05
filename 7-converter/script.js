function changeMoney (money,nameCash,needCash) {
    const ratesToDollarss = 0.012789;
    const ratesToEuro = 0.011014;
    if (nameCash == 'rub' && needCash == 'dollars') {
       return money * ratesToDollarss
    } else if (nameCash == 'rub' && needCash == 'euro') {
        return money * ratesToEuro
    } else {
        return null
    }
}
console.log(changeMoney(1000,'rub','dollars'));
console.log(changeMoney(1000,'rub','euro'))
