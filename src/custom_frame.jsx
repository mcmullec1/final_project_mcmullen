import React from 'react'
import ReactDOM from 'react-dom/client'
import Custom from './Custom.jsx'
import './index.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { ColorModeScript } from "@chakra-ui/react";
//import { useColorMode } from '@chakra-ui/react'
//import theme from './theme.js'


const theme = extendTheme({
  semanticTokens: {
    colors: {
      "chakra-body-text": {
        _light: "black",
        _dark: "white",
      },
      "chakra-body-bg": {
        _light: "linear-gradient(#C5E8F8, #F8FDFF)",
        _dark: "linear-gradient(rgba(56, 6, 87, 1), rgba(167, 76, 182, 1))",
      },
    },
    config: {
      useSystemColorMode: true,
      initialColorMode: "dark"
    }
  },
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme} cssVarsRoot="body">
    {/*<ColorModeScript initialColorMode={theme.config.initialColorMode} />*/}
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Custom />

    </ChakraProvider>
  </React.StrictMode>,
)
