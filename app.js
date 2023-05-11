//CommonJS
const moment = require('moment');

//Regex
/* console.log(
  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w)+$/.test('cadena@blackstone.studio')
); */

function obtenerEdad(fechaNac) {
  // DD-MM-AAAA
  const hoy = new Date();
  const fechaCumple = new Date(fechaNac.split('-').reverse().join('-')); // AAA-MM-DD
  let edad = hoy.getFullYear() - fechaCumple.getFullYear();

  if (
    hoy.getMonth() >= fechaCumple.getMonth() &&
    hoy.getDay() >= fechaCumple.getDay()
  ) {
    console.log(edad);
    return;
  }
  console.log(edad - 1);
}

obtenerEdad('10-05-2000');

function obtenerEdadMoment(fechaNac) {
  const fechaCumple = moment(fechaNac, 'DD-MM-YYYY');
  const hoy = moment();
  return hoy.diff(fechaCumple, 'years');
}

console.log(obtenerEdadMoment('10-06-2000'));
