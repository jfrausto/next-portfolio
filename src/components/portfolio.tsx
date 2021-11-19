import React from 'react';
import {
  Box,
  Flex,
  useColorMode,
  Heading,
} from '@chakra-ui/react';
import { Container } from './Container';
import PortfolioSection from './PortfolioSection';
import SimpleBar from 'simplebar-react';

const Portfolio: React.FC = () => {

  const {colorMode} = useColorMode();

  const portColors = {
    light: "brand.900",
    dark: "brand.100"
  }


  return (
    <>
      <Container
        id="work"
        // bg="#C0C0C0"
        bg="red.900"
        // boxShadow="0 0 10px"
      >
        <Box as={Heading} 
          size="3xl"
          marginBottom="4rem" 
          // textDecoration="underline crimson"
          color={portColors[colorMode]}
          paddingTop={1}
          >
          Projects
        </Box>
        <Flex
          maxH="80vh"
          maxW="1100px"
          alignItems="center"
          justifyContent="center"
          // bg="#EDF2F7"
          borderRadius="7%"
          // boxShadow="inset 10px 3px 5px 5px #000000"
        >
          <SimpleBar 
            style={{  
              maxHeight: "67vh", 
              minWidth: "73vw", 
              overflowX: "hidden",
              backgroundColor: "#2D3748",
              borderRadius: "7px",
              // boxShadow: "inset 0 0 10px",
              padding: "5px"
              // scrollMarginRight: "10px"
            }}
          >
          <PortfolioSection/>
          </SimpleBar>  

        </Flex>
      </Container>
  </>
  )
}

export default Portfolio;
