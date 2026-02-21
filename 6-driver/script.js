const hasLicence = true;
const age = 18;
const isDrunk = false;



const canDrive = hasLicence && age >= 18 && !isDrunk ? 'может' : 'не может';
console.log( `Водитель ${canDrive} везти машину`)