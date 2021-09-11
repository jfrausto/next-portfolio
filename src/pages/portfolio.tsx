import React from 'react';
import {
  Box,
  useColorMode,
  Heading,
} from '@chakra-ui/react';
import PortfolioSection from '../components/PortfolioSection';
import SimpleBar from 'simplebar-react';

const Portfolio: React.FC = () => {

  const {colorMode} = useColorMode();

  const portColors = {
    light: "brand.900",
    dark: "brand.100"
  }

  return (
    <>

        <Box as={Heading} 
          size="xl"
          marginBottom="0.75rem" 
          textDecoration="underline crimson"
          color={portColors[colorMode]}
          paddingTop={1}
          >
          Projects
        </Box>
        <Box
          // paddingX={6}
          // overflowY="auto"
          // overflowX="hidden"
          maxH="80vh"
          maxW="1000px"
        >
            <PortfolioSection/>
        </Box>
  </>
  )
}

export default Portfolio;
