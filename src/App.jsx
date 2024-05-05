import './App.css'
import Custom from './Custom'
import Contact from './Contact'
import About from './About'
import Family from './Family'
import Explore from './Explore'
import Home from './Home'
import { ChakraProvider, useColorMode, useColorModeValue, Button, Flex } from '@chakra-ui/react'
import { HashRouter, Routes, Route } from "react-router-dom";
import { SunIcon, MoonIcon } from '@chakra-ui/icons'



function App() {

  //Styles for light and dark mode
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
          alignItems='center'
          as="b"
          fontSize= '0.85rem'
          bg={header_bg}
          padding='0% 5%'

        >

          <Flex
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
          <Route path="/" element={<Home colorMode={colorMode} style={style}/>}></Route>
          <Route path="/custom" element={<Custom colorMode={colorMode} style={style}/>}></Route>
          <Route path="/explore" element={<Explore colorMode={colorMode} style={style} />}></Route>
          <Route path="/home" element={<Home colorMode={colorMode} style={style} />}></Route>
          <Route path="/contact" element={<Contact colorMode={colorMode} />}></Route>
          <Route path="/about" element={<About colorMode={colorMode} />}></Route>
          <Route path="/family" element={<Family colorMode={colorMode} />}></Route>
        </Routes>
    </HashRouter>
      
    </ChakraProvider>
    </>
  )
}


export default App
