import './App.css'
import { useEffect } from 'react';
import { useState } from 'react';
import Cities from './Cities';
import Custom from './Custom'
import { Center, ChakraProvider, useColorMode, Button,IconButton, Image, Flex, Link } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Badge } from '@chakra-ui/react'
//import city_data from './geo_keyed.json';
import city_data from './all_cities.json';
import globe from "/weather_images/globe.gif"
import logo_dark from "/icons/weather_logo.png"
import logo_light from "/icons/weather_logo_light.png"


function Explore(props) {
    /*
    let title = "Kew Gardens"
    let path = "https://www.planetware.com/photos-large/ENG/london-kew-gardens-gardens-and-lake.jpg"
    let description = "This is Kew Gardens. It's very pretty with lots of flowers. You can visit at all times of the year."
  
    const [posts, setPosts] = useState([])
  
    useEffect(() => {
      async function getData(){
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
        setPosts(data)
      }
      getData()
      console.log(posts)
    }, [])
    */
  
    /*
    const [cities, setCities] = useState([])
    const city_list = ["London", "Los Angeles", "New York City", "Paris","Toronto", "Sydney", "Tokyo", "Dubai", "Amsterdam", "Chicago", "Berlin"]
  
    useEffect(() => {
      async function getCities(){
        const city_response = await fetch('https://mcmullec1.github.io/final_project_wd/geo_keyed.json')
        let city_data = await city_response.json()
        let city_slice = city_data.slice(0,12)
        //console.log(city_data[0]["name"])
        //const city_list = ["London", "Miami", "New York City, "Toronto", "Sydney", "Tokyo", "Dubai", "Amsterdam"]
        let my_cities = []
        for(let i = 1; i < city_data.length; i++){
          //console.log(city_data[i]["ascii_name"])
          if(city_list.includes(city_data[i]["ascii_name"])){
            my_cities.push(city_data[i])
          }
        }
        console.log(city_data)
        
        //setCities(city_data)
        setCities(my_cities)
      }
      getCities()
    }, [])
  
    //console.log(cities)
    console.log(city_data)
  
    */

    let [cities, setCities] = useState(get_filtered_data("all"))

    function get_filtered_data(continent){

      let city_list = []

      if(continent == "all"){
        let top_cities = ["New York City", "Los Angeles", "Mexico City", "São Paulo", "London", "Paris", "Berlin", "Moscow", "Istanbul", "Cairo", "Cape Town", "Mumbai", "Shanghai", "Tokyo", "Sydney", "Jakarta", "Bangkok", "Dubai", "Toronto", "Seoul"];
        for(let i = 1; i < city_data.length; i++){
          //console.log(city_data[i]["ascii_name"])
          if(top_cities.includes(city_data[i]["ascii_name"])){
            city_list.push(city_data[i])
            top_cities = top_cities.filter(function(item) {
              return item !== city_data[i]["ascii_name"]
          })
          }
        }
        city_list.sort(function(a, b){return b.population - a.population});
        return city_list
        
      }

    
      for(let i = 1; i < city_data.length; i++){
        const timezone = city_data[i].timezone
        const city_cont = timezone.split("/")[0]
        if (city_cont == continent){
          city_list.push(city_data[i])
        }
      }
      city_list.sort(function(a, b){return b.population - a.population});
      //console.log("FILTERING DATA")
      //console.log(city_list)

      return city_list.slice(0,20)
      
    }




    /*
    function handleButton(continent) {
      const cont_cities = get_filtered_data(continent)
      setCities(cont_cities)
      ("cities VARIABLE")
      console.log(cities)
    }
    */

    /*
    useEffect(() => {
      async function getCities(){
        setCities(cities)
        console.log(cities)
        
      }
      getCities()
    }, [])
    */
    


    
  
    /*
  
    let api_call2 = 'https://api.open-meteo.com/v1/forecast?latitude='
    cities.map((city, index) => {
      api_call2 = api_call2 + city["lat"] + ","
      return (city);
    })
    
    api_call2 = api_call2.slice(0,-1) + '&longitude='
  
    cities.map((city, index) => {
      api_call2 = api_call2 + city["long"] + ","
      return (city);
    })
  
    api_call2 = api_call2.slice(0,-1) + '&current=temperature_2m,is_day,weather_code'
    console.log(api_call2)
    */
  
  
  
  
  
  
  /*
    const locations = {'London': [51.5085,-0.1257], 'Toronto':[43.7001,-79.4163]}
    let api_call = 'https://api.open-meteo.com/v1/forecast?latitude=' + Object.values(locations)[0][0]
    
    for(let i = 1; i < Object.values(locations).length; i++){
      api_call = api_call + ',' + Object.values(locations)[i][0]
      console.log(Object.values(locations)[i][0])
    }
  
    api_call = api_call + '&longitude=' + Object.values(locations)[0][1]
  
    for(let i = 1; i < Object.values(locations).length; i++){
      api_call = api_call + ',' + Object.values(locations)[i][1]
    }
  
    api_call = api_call + '&current=temperature_2m,is_day,weather_code'
  */
  //let api_call_2 = 'https://api.open-meteo.com/v1/forecast?latitude=' + locations[0]['lat']
  //let one_city =JSON.parse(JSON.stringify(cities[0]));
  
  
  
  
  
  
  
  
  
  
  
  
    /*
    const locations = [{'name':'London', 'lat':51.5085,'long':-0.1257}, {'name':'Toronto','lat':43.7001,'long':-79.4163}]
    let api_call = 'https://api.open-meteo.com/v1/forecast?latitude=' + locations[0]['lat']
  
    for(let i = 1; i < locations.length; i++){
      api_call = api_call + ',' + locations[i]['lat']
    }
  
    api_call = api_call + '&longitude=' + locations[0]['long']
  
    for(let i = 1; i < locations.length; i++){
      api_call = api_call + ',' + locations[i]['long']
    }
  
    api_call = api_call + '&current=temperature_2m,is_day,weather_code'
  
    console.log(api_call)
  
  
    
    const [weathers, setWeather] = useState([])
  
    useEffect(() => {
      async function getWeather(){
        //const weather_response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=51.5085,43.7001&longitude=-0.1257,-79.4163&current=temperature_2m,is_day,weather_code')
        const weather_response = await fetch(api_call)
        const weather_data = await weather_response.json()
        setWeather(weather_data)
      }
      getWeather()
      console.log(weathers)
    }, [])

    */
  
    
  
    return(
      <>
      <ChakraProvider>
        {/*<Button onClick={toggleColorMode}>Toggle {colorMode === "light" ? "Dark" : "Light"}</Button>*/}
        {/*<Box w='50%'>
          <Center><Badge>This is Chakra</Badge></Center>
          </Box>
        <h1>IS this on the screen?</h1>*/}
        <Flex
          w="100%"
          flexDirection="column"
          alignItems="center"
          >
          <Link href="/home">
            <Image
              //src="src/icons/weather_logo_light.png"
              src = {props.colorMode === "dark" ? logo_dark : logo_light}
              alt="sun"
              objectFit='cover'
              margin='40px 10px 40px 10px'
              w = {{base:'99%', sm: '500px', md:'750px'}}
            />
          </Link>
          <Flex
            flexDirection={{base:'column', sm: 'row', md:'row'}}
            w={{base:'60%', sm: '80%', md:'60%'}}
            h={{base:'250px', sm: 'auto', md:'auto'}}
            justifyContent='space-between'
            alignItems='center'
            
          >
            <Button
              variant='solid'
              borderRadius='80px'
              border={props.style.button_border}
              borderColor={props.style.button_border_colour}
              backgroundColor={props.style.ex_button_bg}
              color='chakra-body-text'
              onClick={() => {
                  setCities(get_filtered_data("Asia"));
                  console.log("CITIES HAS CHANGED")
                  console.log(cities);
                }
              }
            >Asia</Button>

            <Button
              variant='solid'
              borderRadius='80px'
              border={props.style.button_border}
              borderColor={props.style.button_border_colour}
              backgroundColor={props.style.ex_button_bg}
              color='chakra-body-text'
              
              onClick={() => {
                  setCities(get_filtered_data("Europe"));
                  console.log("CITIES HAS CHANGED")
                  console.log(cities);
                }
              }
            >Europe</Button>

            <IconButton
              icon = {<Image
                src = {globe}
                alt="globe spinning"
                objectFit='cover'
                h="75px"
                ></Image>}
              onClick={() => {
                setCities(get_filtered_data("all"));
                console.log("CITIES HAS CHANGED")
                console.log(cities);
                }
              }
              variant="unstyled"
              w='auto'
              h='auto'
            >
            </IconButton>

            <Button
              variant='solid'
              borderRadius='80px'
              border={props.style.button_border}
              borderColor={props.style.button_border_colour}
              backgroundColor={props.style.ex_button_bg}
              color='chakra-body-text'
              onClick={() => {
                  setCities(get_filtered_data("Africa"));
                  console.log("CITIES HAS CHANGED")
                  console.log(cities);
                }
              }
            >Africa</Button>

            <Button
              variant='solid'
              borderRadius='80px'
              border={props.style.button_border}
              borderColor={props.style.button_border_colour}
              backgroundColor={props.style.ex_button_bg}
              color='chakra-body-text'
              onClick={() => {
                  setCities(get_filtered_data("America"));
                  console.log("CITIES HAS CHANGED")
                  console.log(cities);
                }
              }
            >America</Button>
          </Flex>
          {/*<WeatherList weathers={weathers} locations = {locations}/>*/}
          <Cities cities={cities}/>
          {/*<Card title = {title} path = {path} description = {description}/> */}
          </Flex>
      </ChakraProvider>
      </>
    )
  }
  
  
  export default Explore
  