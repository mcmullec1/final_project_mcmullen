import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { ColorModeScript } from "@chakra-ui/react";



const theme = extendTheme({
  semanticTokens: {
    colors: {
      "chakra-body-text": {
        //_light: "#626290",
        //_light: "#3A3A64",
        _light: '#111147',
        _dark: "white",
      },
      "chakra-body-bg": {
        _light: "linear-gradient(#DEDEF0, #F8FDFF)",
        //_light: "white",
        _dark: "linear-gradient(rgba(56, 6, 87, 1), rgba(167, 76, 182, 1))",
      }
    },
    config: {
      useSystemColorMode: false,
      initialColorMode: "dark"
    },
    breakpoints: {
      sm: '414px',
      lg: '750px'
    },
  },
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <ChakraProvider theme={theme} cssVarsRoot="body">
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
