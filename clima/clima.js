const axios = require('axios');

let getClima = async (lat, lon) => {

  try{
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apikey}`);

    let temp = resp.data.main.temp;

    return {temp};
  } catch (e){
    return e;
  }



};


module.exports = {
  getClima
}
