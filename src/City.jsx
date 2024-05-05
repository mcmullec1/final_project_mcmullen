import { useEffect } from 'react';
import { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Flex } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import cloud from "/weather_images/cloud.png"
import rain from "/weather_images/rain.png"
import freezing_rain from "/weather_images/freezing_rain.png"
import snow from "/weather_images/snow.png"
import thunder from "/weather_images/thunderstorm.png"
import sun_cloud from "/weather_images/sun_cloud.png"
import sun from "/weather_images/sun.png"
import moon from "/weather_images/moon.png"
import moon_cloud from "/weather_images/moon_cloud.png"
import moon_rain from "/weather_images/moon_rain.png"


function City({city}){

    console.log(city)

    //variable to store the weather for individual city
    const [weather, setWeather] = useState([])

    useEffect(() => {
        async function getWeather(){
            //call the weather api with lat and long of city
            const api_call = "https://api.open-meteo.com/v1/forecast?latitude=" + city["lat"] + "&longitude=" + city["long"] + "&current=temperature_2m,is_day,weather_code"
            const weather_response = await fetch(api_call)
            const weather_data = await weather_response.json()
            let string_json = JSON.stringify(weather_data.current)
            let object_json = JSON.parse(string_json)
            //set weather variable to  be imported weather api data for the city
            setWeather(object_json)
        }
        getWeather()

    },[city])

    //set now as time and convert it to timezone of city
    const timezone = city['timezone']
    const initial_now = new Date()
    const initial_time = new Intl.DateTimeFormat('en-US', {timeZone: timezone, timeStyle: 'short', hour12: true}).format(initial_now)
    
    //set military time as well to use for moon image later on
    const initial_military = new Intl.DateTimeFormat('en-US', {timeZone: timezone, timeStyle: 'short', hour12: false}).format(initial_now)
    
    const [time, setTime] = useState(initial_time)
    const [military_time, setMilitaryTime] = useState()

    //rerender every 30 seconds to keep the correct time on the screen at all times
    useEffect(() => {
        async function getTime(){
            const now = new Date()
            const current_time = new Intl.DateTimeFormat('en-US', {timeZone: timezone, timeStyle: 'short', hour12: true}).format(now)
            const current_military = new Intl.DateTimeFormat('en-US', {timeZone: timezone, timeStyle: 'short', hour12: false}).format(now)
            setTime(current_time)
            setMilitaryTime(current_military)
        }
        getTime()
        var timer = setInterval(getTime, 30000)
        return function cleanup() {
            clearInterval(timer)
        }
    })

    //set default weather condition image to be cloud
    let weather_img = cloud
    let img_alt = "cloudy conditions"
    let bg_colour = "linear-gradient(#5F767D, #AEB5B8)"
  
    //get the 24 hour variable
    const hour_value = parseInt(String(military_time).split(":")[0])

    //if it's night use moon cloud image
    if(hour_value >= 21 || hour_value <= 5){
        weather_img = moon_cloud
        bg_colour = "linear-gradient(#472F8A, #132997)"
    }

    //set parameters for rain conditions
    if((weather["weather_code"]>50 && weather["weather_code"]<56)|| (weather["weather_code"]>=80 && weather["weather_code"]<=86)|| (weather["weather_code"]>60 && weather["weather_code"]<=65)){
        weather_img = rain
        bg_colour = "#626290"
        img_alt = "rainy conditions"
        if(hour_value >= 21 || hour_value <= 5){
            weather_img = moon_rain
        }
        //console.log(weather["weather_code"],"ITS RAINING")
    }

    //set parameters for freezing rain conditions
    else if((weather["weather_code"]>=56 && weather["weather_code"]<=57) || (weather["weather_code"]>=66 && weather["weather_code"]<=67)){
        weather_img = freezing_rain
        bg_colour = "#626290"
        img_alt = "freezing rain conditions"
        //console.log(weather["weather_code"],"ITS FREEZING RAINING")
    }

    //set parameters for snow conditions
    else if(weather["weather_code"]>=71 && weather["weather_code"]<=77){
        weather_img = snow
        img_alt = "snowy conditions"
        //console.log(weather["weather_code"],"ITS SNOWING")
    }

    //set parameters for thunder storm conditions
    else if(weather["weather_code"]>=95 && weather["weather_code"]<=99){
        weather_img = thunder
        bg_colour = "linear-gradient(#472F8A, #132997)"
        img_alt = "thunder storm conditions"
        //console.log(weather["weather_code"],"ITS THUNDER")
    }

    //set parameters for partly sunny
    else if(weather["weather_code"]>=1 && weather["weather_code"]<=2){
        weather_img = sun_cloud
        bg_colour = "linear-gradient(#26A8DF, #7FB2C8)"
        img_alt = "partly sunny conditions"
        if(hour_value >= 21 || hour_value <= 5){
            bg_colour = "linear-gradient(#472F8A, #132997)"
            weather_img = moon
        }
        //console.log(weather["weather_code"],"ITS PARTLY SUN")
    }

    //set parameters for sunny
    else if(weather["weather_code"]==0){
        weather_img = sun
        img_alt = "sunny conditions"
        bg_colour = "linear-gradient(#26A8DF, #7FB2C8)"
        if(hour_value >= 21 || hour_value <= 5){
            bg_colour = "linear-gradient(#472F8A, #132997)"
            weather_img = moon
        }
        //console.log(weather["weather_code"],"ITS SUN")
    }




    return(
        <>
        <ChakraProvider>
            <Flex
                w="300px" 
                padding="20px" 
                margin= "20px" 
                bg={bg_colour}//"#36013F"
                borderRadius='30px'
                color="white"
                alignItems={"center"}
                justifyContent={"center"}
                flexDirection={"column"}
                fontFamily="Inter"
                >
                    
                <Image
                    src={weather_img}
                    alt={img_alt}
                    boxSize='75px'
                    objectFit='cover'
                    margin='15px 10px 0px 10px'
                />

                <Text
                    as="b"
                    fontSize="20pt"
                    margin='10px'
                    textAlign='center'
                >{city['ascii_name'].toUpperCase()}</Text>

                <Text
                as="b"
                fontSize="30pt"
                >{Math.round(weather['temperature_2m'])}°C</Text>

                <Text
                    as="b"
                    fontSize="15pt"
                    marginBottom="20px"
                >{time.toLocaleString('en-US')}</Text>

            </Flex>
        </ChakraProvider>
        </>
    )
}

export default City;