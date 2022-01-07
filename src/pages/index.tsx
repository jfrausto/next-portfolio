import React from 'react';
import AboutMe from '../components/AboutMe';
import { Hero } from '../components/Hero';
import {Box} from '@chakra-ui/react';
import FixedNavBar from '../components/FixedNavBar';
import { Container } from '../components/Container';
import Portfolio from '../components/portfolio';
import Contact from '../components/contact';

const Index: React.FC = () => (
  <>
    {/* Floating nav here */}
    <FixedNavBar />
    
  {/* three containers 100vh each */}
    <Container
      // bg="green.700"
      id="hero"
      // bg="red.500"
      // boxShadow="0px 0px 10px"
      // direction={"row"}
      // zIndex={1}
      // width={"100vw"}
    >
      <Box
        h={"100vh"}
        w={"50%"}
        position={"absolute"}
        top={0}
        left={0}
        // bg="gray.700"
        // bg="linear-gradient(333deg, rgba(12,12,12,1) 60%, rgba(53,80,129,0.91) 60%, rgba(26,33,47,1) 76%)"
        // bg="radial-gradient(ellipse farthest-corner at 260% 95%, rgba(12,12,12,1) 71%, rgba(53,80,129,0.91) 71%, rgba(26,33,47,1) 78%)"
        bg="radial-gradient(circle farthest-corner at bottom right, rgba(12,12,12,1) 74%, rgba(53,80,129,0.91) 74%, rgba(26,33,47,1) 86%)"
        zIndex={2}
      >
        
      </Box>
      <Box
        h={"100vh"}
        w={"50%"}
        // bg="gray.800"
        // bg="linear-gradient(27deg, rgba(12,12,12,1) 60%, rgba(53,80,129,0.91) 60%, rgba(26,33,47,1) 76%)"
        // bg="radial-gradient(ellipse farthest-corner at -10% 250%, rgba(12,12,12,1) 60%, rgba(53,80,129,0.91) 60%, rgba(26,33,47,1) 76%)"
        bg="radial-gradient(circle farthest-corner at bottom left, rgba(12,12,12,1) 74%, rgba(53,80,129,0.91) 74%, rgba(26,33,47,1) 86%)"
        
        position={"absolute"}
        top={0}
        right={0}
        zIndex={2}
        
      >

      </Box>

      <Hero />
    </Container>

    
    <AboutMe />
    <Portfolio />
    <Contact/>
  </>
)

export default Index
