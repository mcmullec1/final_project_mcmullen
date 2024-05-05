import { useState } from 'react';
import Cities from './Cities';
import { ChakraProvider, Image, Flex, Link } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { CUIAutoComplete } from "chakra-ui-autocomplete";
import React from 'react'
import city_import from './geo_keyed.json';
import logo_dark from "/icons/weather_logo.png"
import logo_light from "/icons/weather_logo_light.png"

//define a list of options for the search bar
let city_options = []
for(let i = 1; i < city_import.length; i++){
  city_options.push({value:city_import[i]["ascii_name"].toLowerCase(), label:city_import[i]["ascii_name"], lat:city_import[i]["lat"], long:city_import[i]["long"],timezone:city_import[i]["timezone"], ascii_name:city_import[i]["ascii_name"]});
}
console.log(city_options)


function Custom(props) {
  
  //useState variables for items available to select and items selected
  const [pickerItems, setPickerItems] = useState(city_options);
  const [selectedItems, setSelectedItems] = useState([]);

  console.log(pickerItems)

  /*
  const handleCreateItem = (item) => {
    setPickerItems((curr) => [...curr, item]);
    setSelectedItems((curr) => [...curr, item]);
  };
  */

  const handleSelectedItemsChange = (selectedItems) => {
    if (selectedItems) {
      setSelectedItems(selectedItems);
    }
    console.log(selectedItems)
  };


  return(
    <>
    <ChakraProvider>
     
      <Flex
        w="100%"
        flexDirection="column"
        alignItems="center"
        minH='calc(85vh)'
        >
        <Link href = "#/home">
          <Image
            src = {props.colorMode === "dark" ? logo_dark : logo_light}
            alt="the weather tracker logo written in a cloud like font"
            objectFit='cover'
            margin='40px 10px 40px 10px'
            w = {{base:'99%', sm: '500px', md:'750px'}}
          />
        </Link>

        <Box
          w={{base:'80%', sm:'60%', lg:'40%'}}
        >
        <CUIAutoComplete
          openOnFocus
          placeholder="Type a City"
          //onCreateItem={handleCreateItem}
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
