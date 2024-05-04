
import { useEffect } from 'react';
import { useState } from 'react';
import Cities from './Cities';
import { Center, ChakraProvider, IconButton, useColorMode, Button, Image, Flex, Switch, Text, Link } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Badge } from '@chakra-ui/react'
import { CUIAutoComplete } from "chakra-ui-autocomplete";
import React from 'react'
import city_import from './geo_keyed.json';
import logo_dark from "/icons/weather_logo.png"
import logo_light from "/icons/weather_logo_light.png"


let city_options = []
for(let i = 1; i < city_import.length; i++){
  city_options.push({value:city_import[i]["ascii_name"].toLowerCase(), label:city_import[i]["ascii_name"], lat:city_import[i]["lat"], long:city_import[i]["long"],timezone:city_import[i]["timezone"], ascii_name:city_import[i]["ascii_name"]});
}
console.log(city_options)





function Custom(props) {
  
  //const [cities, setCities] = useState([])
  //const city_list = ["London", "Los Angeles", "New York City", "Paris","Toronto", "Sydney", "Tokyo", "Dubai", "Amsterdam", "Chicago", "Berlin"]
  //const [city_options, setCitiesOptions] = useState([])

  /*
  useEffect(() => {
    async function getCities(){
      const city_response = await fetch('https://mcmullec1.github.io/final_project_wd/geo_keyed.json')
      let city_data = await city_response.json()
      let city_slice = city_data.slice(0,12)
      //console.log(city_data[0]["name"])
      //const city_list = ["London", "Miami", "New York City, "Toronto", "Sydney", "Tokyo", "Dubai", "Amsterdam"]
      let my_cities = []
      //let city_options = []
      for(let i = 1; i < city_data.length; i++){
        //console.log(city_data[i]["ascii_name"])
        if(city_list.includes(city_data[i]["ascii_name"])){
          my_cities.push(city_data[i])
        }
        //city_options.push({value:city_data[i]["ascii_name"], label:city_data[i]["ascii_name"]});
      }
      //console.log(city_options)
      
      //setCities(city_data)
      setCities(my_cities)
      //setCitiesOptions(city_options)
    }
    getCities()
  }, [])
  */

  //console.log(city_options)

  const [pickerItems, setPickerItems] = useState(city_options);
  const [selectedItems, setSelectedItems] = useState([]);

  //setPickerItems();
  console.log(pickerItems)

  const handleCreateItem = (item) => {
    setPickerItems((curr) => [...curr, item]);
    setSelectedItems((curr) => [...curr, item]);
  };

  const handleSelectedItemsChange = (selectedItems) => {
    if (selectedItems) {
      setSelectedItems(selectedItems);
    }
    console.log(selectedItems)
  };


  


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
  */

  
  

  return(
    <>
    <ChakraProvider>
      {/*<Button onClick={toggleColorMode}>Toggle {colorMode === "light" ? "Dark" : "Light"}</Button>*/}
      {/*
      <Flex>
        <Text color='chakra-body-text'>{colorMode === "light" ? "Dark" : "Light"} Mode</Text>
        <Switch onChange={toggleColorMode}></Switch>
      </Flex>
      */}

      {/*<Box w='50%'>
        <Center><Badge>This is Chakra</Badge></Center>
        </Box>
      <h1>IS this on the screen?</h1>*/}
      <Flex
        w="100%"
        flexDirection="column"
        alignItems="center"
        minH='calc(85vh)'
        >
        <Link href = "/home">
          <Image
            //src="src/icons/weather_logo_light.png"
            src = {props.colorMode === "dark" ? logo_dark : logo_light}
            alt="sun"
            objectFit='cover'
            margin='40px 10px 40px 10px'
            w = {{base:'99%', sm: '500px', md:'750px'}}
          />
        </Link>
        {/*<WeatherList weathers={weathers} locations = {locations}/>*/}
        {/*<Card title = {title} path = {path} description = {description}/> */}
        <Box
          w={{base:'80%', sm:'60%', lg:'40%'}}
        >
        <CUIAutoComplete
          //label="Pick a city."
          openOnFocus
          placeholder="Type a City"
          onCreateItem={handleCreateItem}
          items={pickerItems}
          disableCreateItem="true"
          hideToggleButton="true"
          tagStyleProps={{
            color: 'chakra-body-text',
            rounded: "full",
            pt: 1,
            pb: 2,
            px: 2,
            fontSize: "1rem",
            textTransform:"uppercase",
            //as:'b',
            fontWeight: 'bold',
            padding:'0.75rem 1rem',
            bg:'#49497B',
            color: "white"
          }}
          listStyleProps={{
            maxHeight:'100px',
            overflow:'scroll',
            overflowX:'hidden',
            autoFocus: 'false'
          }}
          listItemStyleProps={{
            color:'black',
            background:'none',
            textTransform:"uppercase"
          }}
          selectedItems={selectedItems}
          onSelectedItemsChange={(changes) =>
            handleSelectedItemsChange(changes.selectedItems)
          }
        />
        </Box>
        <Cities cities={selectedItems}/>
      </Flex>
      <style> 
                {` 
                    

                    input{
                      autoFocus: 'false'
                    }` 
                } 
            </style> 
    </ChakraProvider>
    </>
  )
}


export default Custom
