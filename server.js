import e from "express";
import env from "dotenv";
env.config();
import path from 'path';
import { fileURLToPath } from 'url';
import axios from "axios";
import bodyParser from "body-parser";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = e();
const API_KEY = process.env.API_KEY
const port = 3000;

app.use(e.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({extended:true}))

let lat;
let lon;
let place;

let error = `Plz enter Valid City Name.`

app.get('/' , (req,res) => {
    res.render('index.ejs', {lat:lat, lon:lon , place: place , error:error})
})

app.post('/find' , async (req,res) => {
    place = req.body['place']
    try {
        const location = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${place}&limit=5&appid=${process.env.OPM_API}`)
        console.log(location.data);
        lat = location.data[0].lat;
        lon = location.data[0].lon;
        place = location.data[0].name;
        res.redirect('/')
    } catch (error) {
        res.redirect('/');
    }
})

app.listen(port , () => {
    console.log("Listening on http://localhost:3000");
})

// import { request } from "@esri/arcgis-rest-request";

// const url =
//   "https://www.arcgis.com/sharing/rest/content/items/6e03e8c26aad4b9c92a87c1063ddb0e3/data";

// request(url).then((response) => {
//   console.log(response); // WebMap JSON
// });
