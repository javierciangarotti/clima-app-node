
const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


let getInfo = async (direccion) => {
  let c = await lugar.getLatLong(direccion);
  let t = await clima.getClima(c.lat, c.lng);

  return `El clima en: ${c.direccion} es de ${t.temp}`;
}


getInfo(argv.direccion)
  .then( mensaje => {
    console.log(`*************************`);
    console.log(mensaje);
    console.log(`*************************`);
  })
  .catch( error => console.log(`Error en la aplicación: ${error}`));
