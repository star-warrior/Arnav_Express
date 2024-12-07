# SIH-2024 Project

## How to start the repo

1. Have nodejs installed on your pc
2. create a openweathermap Map Forecast api
3. Add a .env file, create a OPM_API variable and insert api key init
4. ``` npm i ```
5. ``` npm run dev ``` or ``` node server.js ```
6. The filw will run on localhost:3000

## How to Use the Website

1. Search for any city with a beachline in india.
2. (It must be a city, there will be no results if you put in state name)
3. It will shsow you the results in the interactive map.
   
## Problem Statement No: 1656

## Project Statement: 

Development of a mobile application to provide recreational suitability information of beach locations across India.

## More Description

Background: Coastal tourism is one of the priority areas highlighted in the Draft Blue economy policy of India. As such, use of technology to improve the tourism and related sectors is the need of the hour. Given the expected increase in the coastal tourism of our country, there is a need to ensure safety of the tourists. In this regard, a mobile application indicating the suitability of beaches for recreational activities (based on the current ocean state like wave heights/ocean currents, meteorological parameters like wind, water quality etc.) will be a useful value addition to the coastal tourism sector. Description: The proposed app should be able to provide tourism suitability (say suitable/not suitable based on various parameters) at a particular point of time across various beaches in India. Create locations of different beaches across the country. Different parameters to be considered to determine suitability of a coastal location for recreation activities like Ocean alerts (High Wave/Swell Surge/Ocean Currents/Storm Surge/Tsunami), Winds, Water quality assessments. These parameters will be available via INCOIS (Indian National Centre for Ocean Information Services) API. The application should devise a method/algorithm to use the above parameters and make the safety/suitability decision at the different locations. Visualization using geospatial maps and colour codes based on suitability of locations. Based on the current location of the user, alert notifications to be provided in case of any alerts in the coastal location of the user) to be provided Expected Solution: Design and development of a mobile application which identifies suitability of coastal tourism sites based on the current weather and oceanic conditions. This can help to save lives and better plan the coastal tourist/recreational activities for the user.

## Rep Description

Project created with Leaflet and Windy Currently

# TODO:

1. Incorporate INCOIS Data Anyhow.
2. Learn to use arcGIS portal.
3. Import ocean and weather Data from both INCOIS and OpenWeatherMap and also from Windy.com