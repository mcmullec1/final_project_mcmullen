/*
import { Center, ChakraProvider, useColorMode, Button, Image, Flex, Text, Link, Box } from '@chakra-ui/react'

function Instructions() {
    const { colorMode, toggleColorMode } = useColorMode();

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
                    src = {colorMode === "dark" ? "src/icons/weather_logo.png" : "src/icons/weather_logo_light.png"}
                    alt="sun"
                    objectFit='cover'
                    margin='40px 10px 40px 10px'
                    h="75px"
                />
            </Link>
            <Flex
                w="100%"
                h='300px'
                flexDirection="row"
                padding= '10px'
                justifyContent='space-around'
            >

                <Flex
                    w="50%"
                    
                >
                   

                    
                    <Image
                        src = "src/icons/custom.png"
                        alt="sun"
                        objectFit='cover'
                        borderRadius='20px'
                        padding = '10px'
                        display='block'
                        w='100%'
                        h='300px'
                    />
                    

                </Flex>

                <Flex
                    w="50%"
                    flexDirection='column'
                    justifyContent='center'
                    alignItems='center'
                >
                    <Text
                        padding='10px'
                    >To use the custom functionality, first navigate to the custom page from with the homepage or the navbar. </Text>
                    <Text
                        padding='10px'
                    >Then, simply type into the input field which city you would like to add to your dashboard. </Text>
                    <Text
                        padding='10px'
                    >Select your chosen city from the pop-up list of options and the widget should appear below. You can also choose to deselect a city by simply clicking on the X next to the city name.</Text>
                </Flex>
            </Flex>

        </Flex>
        </ChakraProvider>
    )
}
  
  
export default Instructions
*/
