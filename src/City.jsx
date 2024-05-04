import { useEffect } from 'react';
import { useState } from 'react';
import { Center, ChakraProvider } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
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


function City({city}){
    //const {title , body} = weather;
    console.log(city)


    const [weather, setWeather] = useState([])

    useEffect(() => {
        async function getWeather(){
        const api_call = "https://api.open-meteo.com/v1/forecast?latitude=" + city["lat"] + "&longitude=" + city["long"] + "&current=temperature_2m,is_day,weather_code"
        //const weather_response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=51.5085&longitude=-0.1257&current=temperature_2m,is_day,weather_code')
        //console.log(api_call)
        const weather_response = await fetch(api_call)
        const weather_data = await weather_response.json()
        let string_json = JSON.stringify(weather_data.current)
        let object_json = JSON.parse(string_json)
        //console.log(object_json)
        setWeather(object_json)
        }

        getWeather()

    },[city])


    const timezone = city['timezone']
    //console.log(city['ascii_name'], city.timezone)
    const initial_now = new Date()
    const initial_time = new Intl.DateTimeFormat('en-US', {timeZone: timezone, timeStyle: 'short', hour12: true}).format(initial_now)
    const [time, setTime] = useState(initial_time)

    useEffect(() => {
        async function getTime(){
            const now = new Date()
            const current_time = new Intl.DateTimeFormat('en-US', {timeZone: timezone, timeStyle: 'short', hour12: true}).format(now)
            setTime(current_time)
        }
        getTime()
        var timer = setInterval(getTime, 30000)
        return function cleanup() {
            clearInterval(timer)
        }
    })

    let weather_img = cloud
    let bg_colour = "linear-gradient(#5F767D, #AEB5B8)"


    if((weather["weather_code"]>50 && weather["weather_code"]<56)|| (weather["weather_code"]>=80 && weather["weather_code"]<=86)|| (weather["weather_code"]>60 && weather["weather_code"]<=65)){
        weather_img = rain
        bg_colour = "#626290"
        //console.log(weather["weather_code"],"ITS RAINING")
    }
    else if((weather["weather_code"]>=56 && weather["weather_code"]<=57) || (weather["weather_code"]>=66 && weather["weather_code"]<=67)){
        weather_img = freezing_rain
        bg_colour = "#626290"
        //console.log(weather["weather_code"],"ITS FREEZING RAINING")
    }
    else if(weather["weather_code"]>=71 && weather["weather_code"]<=77){
        weather_img = snow
        //console.log(weather["weather_code"],"ITS SNOWING")
    }
    else if(weather["weather_code"]>=95 && weather["weather_code"]<=99){
        weather_img = thunder
        bg_colour = "linear-gradient(#472F8A, #132997)"
        //console.log(weather["weather_code"],"ITS THUNDER")
    }
    /*else if((time.getHours()>=19)||(time.getHours()<=6)){
        weather_img = "src/weather_images/snow.png"
        console.log(weather["weather_code"],"ITS NIGHT")}
    */
    else if(weather["weather_code"]>=1 && weather["weather_code"]<=2){
        weather_img = sun_cloud
        bg_colour = "linear-gradient(#26A8DF, #7FB2C8)"
        //console.log(weather["weather_code"],"ITS PARTLY SUN")
    }
    else if(weather["weather_code"]==0){
        weather_img = sun
        bg_colour = "linear-gradient(#26A8DF, #7FB2C8)"
        if(time.getHours() >= 21 || time.getHours() <= 5){
            bg_colour = "linear-gradient(#472F8A, #132997)"
            weather_img = moon
        }
        //console.log(weather["weather_code"],"ITS SUN")
    }
    else{
        //console.log(weather["weather_code"],"ITS CLOUD")
    }




    return(
        <>
        <ChakraProvider>
            <Flex
                w="300px" 
                //borderWidth='1px' 
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
                    //src= "src/weather_images/cloud.png"
                    src={weather_img}
                    alt="sun"
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
                {/*<p>{city['lat']}, {city['long']}</p>*/}
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