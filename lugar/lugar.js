const axios = require('axios');

let getLatLong = async(direccion) => {
  let encodeUrl = encodeURI(direccion);
  let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=AIzaSyCVhXKGrJmL2_qyPN8ahzOJcX4oPalnm30`);

  if(resp.data.status === 'ZERO_RESULTS'){
    throw new Error(`No hay resultados para la dirección ${direccion}`);
  }
  switch (resp.data.status) {
    case 'ZERO_RESULTS':
      throw new Error(`No hay resultados para la dirección ${direccion}`);
      break;
    case 'REQUEST_DENIED':
      throw new Error(`Error en el API Key de Google [Google Error: ${resp.data.error_message}]`);
      break;

  }

  let location = resp.data.results[0];
  let { lat, lng }  = location.geometry.location;

  return {
    direccion: location.formatted_address,
    lat,
    lng
  }
}


module.exports = {
  getLatLong
}
