import e from "express";
import env from "dotenv";
env.config();
import path from 'path';
import { fileURLToPath } from 'url';
import axios from "axios";
import bodyParser from "body-parser";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

//! Custom JS Modules

// import co_ords from "./modules/co_ords.mjs";
// import weather_owm from "./modules/weather_owm.mjs";

const app = e();
const OWM_API = process.env.OWM_API
const port = 3000;

app.use(e.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({extended:true}))

// Pre Defined Variables

var lat,lon,place;

let error = `Plz enter Valid City Name.`

app.get('/' , (req,res) => {
    res.render('map.ejs')
})

app.post('/find' , (req,res) => {
    place = req.body['place']

    co_ords(place);
    console.log(lat,lon);
    weather_owm(lat,lon);
    res.redirect('/');
})

app.listen(port , () => {
    console.log("Listening on http://localhost:3000");
})

async function co_ords(place) {
    try {
        const location = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${place}&limit=5&appid=${process.env.OWM_API}`)
        console.log(location.data);
        lat = location.data[0].lat;
        lon = location.data[0].lon;
        place = location.data[0].name;
    } catch (error) {
        return error
    }
}

async function weather_owm(lat,lon) {
    // console.log(lat,lon);
    try {
       const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OWM_API}`);
       console.log(response.data);
       console.log("Finished Work");
    } catch (error) {
        console.log(error.code);
    }
}