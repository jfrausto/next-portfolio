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
      >
        <Box as={Heading} 
          size="xl"
          marginBottom="2rem" 
          textDecoration="underline crimson"
          color={portColors[colorMode]}
          paddingTop={1}
          >
          Projects
        </Box>
        <Flex
          maxH="80vh"
          maxW="1000px"
          alignItems="center"
          justifyContent="center"
        >
          <SimpleBar 
            style={{  
              maxHeight: "65vh", 
              minWidth: "70vw", 
              overflowX: "hidden" 
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
