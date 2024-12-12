import axios from "axios";
import env from "dotenv";
env.config();

const OWM = process.env.OWM_API;

async function weather_owm(lat,lon) {
    // console.log(lat,lon);
    try {
       const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OWM}`);
       console.log(response.data);
       console.log("Finished Work");
    } catch (error) {
        console.log(error.code);
    }
}

export default weather_owm;