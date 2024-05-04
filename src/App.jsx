import './App.css'
import { useEffect } from 'react';
import { useState } from 'react';
import Cities from './Cities';
import Custom from './Custom'
import Contact from './Contact'
import About from './About'
import Instructions from './Instructions'
import Explore from './Explore'
import Home from './Home'
import { Center, ChakraProvider, useColorMode, useColorModeValue, Button, Image, Flex, Switch } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Badge } from '@chakra-ui/react'
import { BrowserRouter,HashRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { ColorModeScript } from "@chakra-ui/react";





function App() {
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
      console.log(my_cities)
      
      //setCities(city_data)
      setCities(my_cities)
    }
    getCities()
  }, [])

  console.log(cities)

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


  //Header
  const header_bg = useColorModeValue("none", "rgba(0, 0, 0, 0.3)");

  //Home page
  const { colorMode, toggleColorMode } = useColorMode();
  const button_bg = useColorModeValue("#FFFFFF", "#26A8DF");
  const button_border = useColorModeValue("2px", "none");
  const button_border_colour = useColorModeValue("#49497B", "none");

  //Explore page
  const ex_button_bg = useColorModeValue("#FFFFFF", "#AA26A5");


  const style = {
    button_bg: button_bg,
    button_border: button_border,
    button_border_colour: button_border_colour,
    ex_button_bg: ex_button_bg

  }

  
  return(
    <>
    <ChakraProvider>
    <HashRouter>
        
    <Flex
          w='100%'
          h={{base:'calc(15vh)', sm:'calc(10vh)', lg:'calc(10vh)'}}
          minH='40px'
          flexDirection='row'
          justifyContent='space-between'
          //alignItems={{base:'space-around', sm:'center', lg:'center'}}
          alignItems='center'
          as="b"
          fontSize= '0.85rem'
          //fontSize = {{base:'0.85rem', sm: '0.7rem', md:'0.85rem'}}
          bg={header_bg}
          padding='0% 5%'

        >

          <Flex
            //justifyContent='space-between'
            justifyContent={{base:'space-around', sm: 'space-between', md:'space-between'}}
            alignItems='center'
            w={{base:'30%', sm: '40%', md:'30%'}}
            h = '100%'
            flexDirection={{base:'column', sm: 'row', md:'row'}}
          >
            <a href='#/home'>HOME</a>
            <a href='#/custom'>CUSTOM</a>
            <a href='#/explore'>EXPLORE</a>
          </Flex>

          <Flex
            //justifyContent='space-between'
            justifyContent={{base:'space-around', sm: 'space-between', md:'space-between'}}
            alignItems='center'
            w={{base:'40%', sm: '50%', md:'40%'}}
            h = '100%'
            flexDirection={{base:'column', sm: 'row', md:'row'}}
          >
            <a href='#/contact'>CONTACT US</a>
            <a href='#/about'>ABOUT US</a>
            <Button bg='white' onClick={toggleColorMode}>{colorMode === "light" ? <MoonIcon color="#49497B"/> : <SunIcon color="#49497B"/>}</Button>
          </Flex>
          

        </Flex>

        <Routes>
          <Route path="/custom" element={<Custom colorMode={colorMode} style={style}/>}></Route>
          <Route path="/explore" element={<Explore colorMode={colorMode} style={style} />}></Route>
          <Route path="/home" element={<Home colorMode={colorMode} style={style} />}></Route>
          <Route path="/contact" element={<Contact colorMode={colorMode} />}></Route>
          <Route path="/about" element={<About colorMode={colorMode} />}></Route>
          <Route path="/">
            <Navigate to="#/home" />
          </Route>
          {/*<Route path="/instructions" element={<Instructions />}></Route>*/}
        </Routes>



      </HashRouter>
      {/*<Button onClick={toggleColorMode}>Toggle {colorMode === "light" ? "Dark" : "Light"}</Button>*/}
      {/*<Box w='50%'>
        <Center><Badge>This is Chakra</Badge></Center>
        </Box>
      <h1>IS this on the screen?</h1>
      <Flex
        w="100%"
        flexDirection="column"
        alignItems="center"
        >
        <Image
          //src="src/icons/weather_logo_light.png"
          src = {colorMode === "dark" ? "src/icons/weather_logo.png" : "src/icons/weather_logo_light.png"}
          alt="sun"
          objectFit='cover'
          margin='100px 10px 40px 10px'
          h="75px"
        />
        <Cities cities={cities}/>
        </Flex>
      */}
    </ChakraProvider>
    </>
  )
}


export default App
