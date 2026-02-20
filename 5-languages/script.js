
let language = prompt('Выбери язык? ru,en,de');
console.log(language)

switch(language) {
    case 'en' :
    console.log('Hi');
    break;
    case 'ru' :
    console.log('Привет');
    break;
    case 'de' :
    console.log('Gutten tag');
    break;
    default : 
    console.log('Я не знаю твой язык')
}
