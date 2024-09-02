let latitude;
let longitude;
let place;

window.onload = () => {

  setTimeout(() => {
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

      // Optional: Initial state of the map
      lat: latitude,
      lon: longitude,
      zoom: 100,
      maxZoom: 1000
    };

    // Initialize Windy API
    windyInit(options, windyAPI => {
      // windyAPI is ready, and contain 'map', 'store',
      // 'picker' and other usefull stuff
      const { map } = windyAPI;

      var marker = L.marker([latitude, longitude]).addTo(map);

      var circle = L.circle([latitude, longitude], {
        color: 'red',
        fillColor: 'blue',
        fillOpacity: 0.5,
        radius: 5000
      }).addTo(map);

      // .map is instance of Leaflet map

    });
  }, 1000);

}







