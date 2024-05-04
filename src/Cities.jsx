import City from './City';
import { Center, ChakraProvider } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { SimpleGrid } from '@chakra-ui/react'

function Cities({cities}){

    return(
      <ChakraProvider>
        {/*<div className="post_list">*/}
        <SimpleGrid 
          minChildWidth='315px'
          w="100%"
          >
            {cities.map((city, index) => {
                //console.log(index)
                return (
                    //<div key={index}>
                    /*<Box 
                      w="200px" 
                      borderWidth='1px' 
                      padding="20px" 
                      margin= "20px" 
                      key={index} 
                      bg="#36013F"
                      borderRadius='30px'
                      color="white">
                      */
                      <City city={city} key={index}/>
                    //</Box>
                    //</div>
                  );
                })}
        </SimpleGrid>
      </ChakraProvider>
    )
}

export default Cities;