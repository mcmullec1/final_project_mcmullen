import { Center, ChakraProvider, useColorMode, Button, Image, Flex, Text, Link, Box } from '@chakra-ui/react'
import logo_dark from "/icons/weather_logo.png"
import logo_light from "/icons/weather_logo_light.png"
import about_dark from "/icons/about2.png"
import about_light from "/icons/about_light.png"

function About(props) {
  

    return(
        <ChakraProvider>
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
            <Flex
                w="100%"
                flexDirection={{base:'column', sm: 'column', md:'row'}}
                padding= '10px'
                maxW='1000px'
                justifyContent='space-around'
                alignItems='center'
            >

                <Flex
                    w = {{base:'100%', sm: '100%', md:'40%'}}
                    justifyContent='center'
                >
                    <Image
                        src = {colorMode === "dark" ? about_dark : about_light}
                        alt="sun"
                        display= 'block'
                        objectFit='contain'
                        maxW='310px'
                        w={{base:'200px', sm:'275px', lg:'310px'}}

                    />
                </Flex>

                <Flex
                    w={{base:"80%", sm:"70%", lg:"60%"}}
                    maxW='600px'

                    flexDirection='column'
                    margin='15px'
                    padding='20px'
                    background= "linear-gradient(#472F8A, #132997)"
                    borderRadius= '30px'
                    color='white'
                >
                    <Text
                        padding='10px'
                    >Hello my name is Clare and welcome to my website, your global hub for staying connected and exploring the world's weather in real-time! ⛅  🌧️ ☀️ ⛈️ ❄️ 🌩️ </Text>
                    <Text
                        padding='10px'
                    >This site allows users effortlessly track the weather and local time in custom cities across the globe, ensuring you're always in sync with your loved ones' lives no matter where they are. Whether it's keeping tabs on family members in distant lands or coordinating with friends across time zones, the customizable widgets make it easy to stay informed and connected.</Text>
                    <Text
                        padding='10px'
                    >Join us on our mission to bridge distances, foster connections, and embrace the beauty of global diversity. And shoutout to my Babcia who thought it was a cool idea! ❤️</Text>
                </Flex>
            </Flex>

        </Flex>
        </ChakraProvider>
    )
}
  
  
export default About