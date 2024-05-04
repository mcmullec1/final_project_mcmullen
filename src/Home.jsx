import { Center, ChakraProvider, IconButton, useColorMode, useColorModeValue, Button, Image, Flex, Text, Link } from '@chakra-ui/react'
import { useEffect } from 'react';


function Home(props) {

    //const { colorMode, toggleColorMode } = useColorMode();
    /*
    useEffect(() => {
        if (localStorage.getItem('chakra-ui-color-mode') === 'light' && colorMode === 'dark') {
          setTimeout(() => toggleColorMode(), 1500)
        } else if (localStorage.getItem('chakra-ui-color-mode') === 'dark' && colorMode === 'light') {
          setTimeout(() => toggleColorMode(), 1500)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])
    
    */
    //const logo_src = useColorModeValue("src/icons/weather_logo_light.png", "src/icons/weather_logo.png")
    console.log(props.colorMode)
    //const button_bg = useColorModeValue("#FFFFFF", "#26A8DF")

    return(
        
        <ChakraProvider>
            <Flex
            w="100%"
            h='calc(85vh)'
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            >
                <Image
                    src = '/weather_images/globe.gif'
                    alt="globe spinning"
                    objectFit='cover'
                    margin='10px 10px 10px 10px'
                    h="120px"
                ></Image>

                <Image
                    src = {props.colorMode === "dark" ? "/icons/weather_logo.png" : "/icons/weather_logo_light.png"}
                    //src = {logo_src}
                    alt="logo"
                    objectFit='cover'
                    margin='40px 10px 40px 10px'
                    //h="75px"
                    w = {{base:'99%', sm: '500px', md:'750px'}}

                ></Image>

                <Flex
                    flexDirection='row'
                    width='220px'
                    justifyContent='space-between'
                >
                    <Link href='/explore'>
                        <Button
                            variant='solid'
                            borderRadius='80px'
                            border={props.style.button_border}
                            borderColor={props.style.button_border_colour}
                            backgroundColor={props.style.button_bg}
                            color='chakra-body-text'

                        
                        >Explore</Button>
                    </Link>
                    <Link href='/custom'>
                        <Button
                            variant='solid'
                            borderRadius='80px'
                            border={props.style.button_border}
                            borderColor={props.style.button_border_colour}
                            backgroundColor={props.style.button_bg}
                            color='chakra-body-text'

                        
                        >Custom</Button>
                    </Link>
                </Flex>
            </Flex>
        </ChakraProvider>
    )
}
  
  
export default Home