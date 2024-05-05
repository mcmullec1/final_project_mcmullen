# Weather Tracker Website ⛅ 🌧️ ☀️ ⛈️ ❄️ 🌩️

Welcome to my website! This site allows users to effortlessly track the weather and local time in custom cities across the globe. My aim with this project was to built a platform to bridge distances between loved ones and keep up to date on wherever you so choose in the world. 

#### This website is hosted on Git Pages and can be found at the following URL:
- https://mcmullec1.github.io/final_project_mcmullen/

#### This platform was built using React, Vite and Chakra UI. 
- https://react.dev/
- https://vitejs.dev/
- https://v2.chakra-ui.com/

#### APIs / Data Sources:
- https://simplemaps.com/data/world-cities
    - City Name, Latitude, Longitude, Timezone
- https://open-meteo.com/
    - Current Conditions, Current Temperature

#### Implementation Overview

The Weather Tracker website consists of 5 pages: Home, Custom, Explore, Contact Us and About Us. The majority of the functionality comes in the custom and explore pages. These pages use imported data from SimpleMaps to then call the OpenMeteo API, which then aquires weather data using latitude and logitude coordinates. 

The custom page includes a search bar where users can pick which city widgets they would like to view on their dashboard. This is achieved using useState functions for selected cities and available cities. The explore page features buttons for each continent, as well as the whole world. These buttons filter widgets to only include the selected continent. This was similarily achieved using a useState function for the cities variable. Both of these pages make use of the City.jsx component, which uses the useEffect function to keep the city, weather and time data on the screen up to date. 

The site is built using the Chakra UI framework which was particularily beneficial when coding the Colour Mode functionality. Furthermore, Chakra UI allows for custom breakpoints, which were crucial in making the site fully responsive. Routing was achieved by using a React HashRouter, as this was the only option when hosting on Git Pages. Additionally input validation is implmented on the Contact Us page, where Formik and Yup are utilized. 

#### Files

##### App.jsx
- Contains the universal header code as well as the routed links to each of the pages.

##### Home.jsx
- Consists of the code for the landing page.

##### Custom.jsx
- This code inlcudes the functionality to search for custom cities to add to a dashboard.
- It uses the Cities and City components.

##### Explore.jsx
- This code includes the functionality to view cities around the world and filter based on continent.
- It also uses the Cities and City components

##### Cities.jsx
- This component consists of a Chakra UI SimpleGrid of City components
- It takes a list of cities' data as props

##### City.jsx
- This component returns a widget for an individual city with information such as name, temperature, current conditions and local time.
- It takes an Object with data for one city.
- It connects to the API to pull weather data for that city.
- It rerenders every 30 seconds to allow for updated on-screen local time and additionally rerenders if the city data changes.

##### Contact.jsx
- This code inlcudes a Formik form that validates user input data using Yup.

##### About.jsx
- This returns the About Us page, with image and text.

##### main.jsx
- Includes the customized Charka UI theme variable, updated to include light and dark mode as well as new breakpoints.

##### index.html
- the basic html outline for the application

##### all_cities.json, geo_keyed.json
- JSON files of city data from SimpleMaps

##### App.css, index.css
- a small amount of styling, majority was done with Chakra UI props




