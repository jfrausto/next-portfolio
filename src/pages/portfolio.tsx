import React from 'react';
import {
  Box,
  Flex,
  useColorMode,
  Heading,
  Text,
  Wrap, 
  WrapItem 
} from '@chakra-ui/react';
import { 
  vibeeTags, 
  pubCrawlTags, 
  learnSquadTags, 
  burgerTags, 
  budgetTrackTags,
  cryptickTags
} from '../components/ProjectTags'

import PortfolioCard from '../components/PortfolioCard';
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
        <Flex
          // paddingX={6}
          // overflowY="auto"
          // overflowX="hidden"
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
  </>
  )
}

export default Portfolio;
