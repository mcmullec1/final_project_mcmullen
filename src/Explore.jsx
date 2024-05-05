import { useState } from 'react';
import Cities from './Cities';
import { ChakraProvider, Button,IconButton, Image, Flex, Link } from '@chakra-ui/react'
import city_data from './all_cities.json';
import globe from "/weather_images/globe.gif"
import logo_dark from "/icons/weather_logo.png"
import logo_light from "/icons/weather_logo_light.png"


function Explore(props) {

    let [cities, setCities] = useState(get_filtered_data("all"))


    //function to filter data based on the continent parameter
    function get_filtered_data(continent){

      let city_list = []

      //for world cities use the ones included in the list below
      if(continent == "all"){
        let top_cities = ["New York City", "Los Angeles", "Mexico City", "São Paulo", "London", "Paris", "Berlin", "Moscow", "Istanbul", "Cairo", "Cape Town", "Mumbai", "Shanghai", "Tokyo", "Sydney", "Jakarta", "Bangkok", "Dubai", "Toronto", "Seoul"];
        for(let i = 1; i < city_data.length; i++){
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

      //if a continent is given, use the continent in timezone variable to filter
      for(let i = 1; i < city_data.length; i++){
        const timezone = city_data[i].timezone
        const city_cont = timezone.split("/")[0]
        if (city_cont == continent){
          city_list.push(city_data[i])
        }
      }
      //sort by population and take the top 20
      city_list.sort(function(a, b){return b.population - a.population});
      return city_list.slice(0,20)
      
    }
  
  
    return(
      <>
      <ChakraProvider>
        <Flex
          w="100%"
          flexDirection="column"
          alignItems="center"
          >
          <Link href="#/home">
            <Image
              src = {props.colorMode === "dark" ? logo_dark : logo_light}
              alt="the weather tracker logo written in a cloud like font"
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
                  console.log(cities);
                }
              }
            >America</Button>
          </Flex>

          <Cities cities={cities}/>

        </Flex>
      </ChakraProvider>
      </>
    )
  }
  
  
  export default Explore
  