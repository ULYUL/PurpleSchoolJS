
let language = prompt('Выбери язык? English,Russin,German');
console.log(language)

switch(language) {
    case 'English' :
    console.log('Hi');
    break;
    case 'Russian' :
    console.log('Привет');
    break;
    case 'German' :
    console.log('Привет');
    break;
    default : 
    console.log('Я не знаю твой язык')
}
