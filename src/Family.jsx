import './App.css'
import { useEffect } from 'react';
import { useState } from 'react';
import Cities from './Cities';
import { Center, ChakraProvider, useColorMode, Button,IconButton, Image, Flex, Link } from '@chakra-ui/react'
import city_data from './family_cities.json';
import globe from "/weather_images/globe.gif"
import logo_dark from "/icons/weather_logo.png"
import logo_light from "/icons/weather_logo_light.png"


function Family(props) {

    let [cities, setCities] = useState(get_filtered_data("all"))

    function get_filtered_data(person){

        let city_list = []
        let my_cities = ["Uxbridge", "Richmond", "Val-des-Monts", "Nepean", "Destin", "North Conway", "Hamilton", "Waterloo", "Kingston", "Toronto"];
        for(let i = 0; i < city_data.length; i++){
            if(my_cities.includes(city_data[i]["ascii_name"])){
            city_list.push(city_data[i])} 
      } 
      return city_list
    }

    
  
    return(
      <>
      <ChakraProvider>
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
          <Cities cities={cities}/>
        </Flex>
      </ChakraProvider>
      </>
    )
  }
  
  
  export default Family
  