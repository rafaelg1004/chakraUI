import React from 'react';
import { Box, Stack,Wrap,WrapItem,Badge, Grid,GridItem } from '@chakra-ui/react';
import { Button, ButtonGroup, Image } from '@chakra-ui/react'

const Header = () => {
    const property = {
        imageUrl: 'https://bit.ly/2Z4KKcF',
        imageAlt: 'Rear view of modern home with pool',
        beds: 3,
        baths: 2,
        title: 'Modern home in city center in the heart of historic Los Angeles',
        formattedPrice: '$1,900.00',
        reviewCount: 34,
        rating: 4,
      }
  return (
   
    <Grid  h='300px'
    templateRows='repeat(2, 1fr)'
    templateColumns='repeat(1, 2fr)'
    gap={4}>
    <Box
      display='flex'
      alignItems='center'
      justifyContent='center'
      width='100%'
      py={16}
      bgImage="./src/imagenes/imagen3.jpg"
      bgPosition='center'
      bgRepeat='no-repeat'
      mb={3}
    >
      <ButtonGroup gap='7' >
        <Button colorScheme='whiteAlpha'>Ver Detalles</Button>
        <Button colorScheme='whitekAlpha'>Ver Video</Button>
      </ButtonGroup>
    </Box>
  
    
    
 
    <Grid templateColumns='repeat(5, 1fr)' gap={80}>
    <GridItem colSpan={2} h='10'display='flex'
      alignItems='center'
      justifyContent='center'
      width='100%'
      py={16}
      bgImage="./src/imagenes/imagen3.jpg"
      bgPosition='center'
      bgRepeat='no-repeat'
      >
         <ButtonGroup gap='7' >
        <Button colorScheme='whiteAlpha'>Ver Detalles</Button>
        <Button colorScheme='whitekAlpha'>Ver Video</Button>
      </ButtonGroup>
    </GridItem>
   
  <GridItem colStart={4} colEnd={6} h='10' bg='' />
</Grid>
  
    
  
    </Grid>
  
    
    
  );
};

export default Header;

