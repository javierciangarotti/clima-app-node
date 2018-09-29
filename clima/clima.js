const axios = require('axios');

let getClima = async (lat, lon) => {

  try{
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=f11c3705777fd8c2e3d583cc27cd3140`);

    let temp = resp.data.main.temp;

    return {temp};
  } catch (e){
    return e;
  }



};


module.exports = {
  getClima
}
