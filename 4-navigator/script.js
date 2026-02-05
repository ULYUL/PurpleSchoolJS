const addressLat = 10;
const addressLong = 11;
const positionLat = 12;
const positionLong = 13;

const result = ((positionLat - addressLat)**2 + (positionLong - addressLong)**2)**0.5;
console.log(`Расстояние равно: ${ result }`);