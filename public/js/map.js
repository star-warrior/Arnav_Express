let latitude;
let longitude;
let place;

window.onload = async () => {

  await setTimeout(async () => {
    console.log("Loaded");
    if (document.querySelector('.lat') == null) {
      
      //? TO find Users current Location
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          function (position) {
            latitude = position.coords.latitude;
            longitude
              = position.coords.longitude;
            console.log("Latitude:", latitude);
            console.log("Longitude:", longitude);

          },
          function (error) {
            console.error("Error getting geolocation:", error);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    } else {
      latitude = parseFloat(document.querySelector('.lat').textContent);
      longitude = parseFloat(document.querySelector('.lon').textContent);
      place = document.querySelector('.place').textContent;
    }



    console.log(latitude, longitude);

    const options = {
      // Required: API key
      key: 'c6pv4EGLWysonNJqKh5a3pbBlpxS2Zh1', // REPLACE WITH YOUR KEY !!!

      // Put additional console output
      verbose: true,
      // particlesAnim: 'off',

      // Optional: Initial state of the map
      lat: latitude,
      lon: longitude,
      zoom: 50,
      maxZoom: 1000
    };

    await windyInit(options, windyAPI => {
      const { map, picker, utils, broadcast, store } = windyAPI;
      // All the params are stored in windyAPI.store

      addMarker(latitude,longitude,map)
      addCircle(latitude,longitude,'green','cyan',5000,map)

      picker.on('pickerOpened', ({ lat, lon, values, overlay }) => {
        // -> 48.4, 14.3, [ U,V, ], 'wind'
        console.log('opened', lat, lon, values, overlay);

        const windObject = utils.wind2obj(values);
        console.log(windObject);
      });

      picker.on('pickerClosed', () => {
        // picker was closed
        console.log("Picker CLosed");
      });

      store.on('pickerLocation', ({ lat, lon }) => {
        console.log(lat, lon);

        const { values, overlay } = picker.getParams();
        console.log('location changed', lat, lon, values, overlay);

        latitude = lat;
        longitude = lon;
      });

      // Wait since wather is rendered
      broadcast.once('redrawFinished', () => {
        // Opening of a picker (async)
        console.log("Redraw Finished");
        picker.open({ lat: latitude, lon: longitude });
        addCircle(latitude,longitude,'red','cyan',5000,map)
      });

      const levels = store.getAllowed('availLevels');
      console.log(store.get('availLevels'));
      // levels = ['surface', '850h', ... ]
      // Getting all available values for given key

      let i = 0;
      setInterval(() => {
        i = i === levels.length - 1 ? 0 : i + 1;

        // Changing Windy params at runtime
        store.set('level', levels[i]);
      }, 500);

      // Observing change of .store value
      store.on('level', level => {
        console.log(`Level was changed: ${level}`);
      });
    });
  }, 1000);

}

function addMarker (lat,lon,map) {
  console.log("Marker");
  var marker = L.marker([lat, lon]).addTo(map);
}

function addCircle(lat,lon,color,fill,rad,map) {
  console.log("Circle");
  var circle = L.circle([lat, lon], {
    color: color,
    fillColor: fill,
    fillOpacity: 0.5,
    radius: rad
  }).addTo(map);
}






