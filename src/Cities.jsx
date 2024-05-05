import City from './City';
import { ChakraProvider } from '@chakra-ui/react'
import { SimpleGrid } from '@chakra-ui/react'

function Cities({cities}){

    return(
      <ChakraProvider>
        <SimpleGrid 
          minChildWidth='315px'
          w="100%"
          >
            {cities.map((city, index) => {
                return (
                      <City city={city} key={index}/>
                  );
                })}
        </SimpleGrid>
      </ChakraProvider>
    )
}

export default Cities;