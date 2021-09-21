import React from 'react';
import AboutMe from '../components/AboutMe';
import { Hero } from '../components/Hero';
// import {Flex, Text, Spacer} from '@chakra-ui/react';
import FixedNavBar from '../components/FixedNavBar';
import { Container } from '../components/Container';

const Index: React.FC = () => (
  <>
    {/* Floating nav here */}
    <FixedNavBar />
    
  {/* three containers 100vh each */}
    <Container
      bg="green.700"
      id="hero"
    >
      <Hero />
    </Container>
    <AboutMe />
    <Container
      bg="red.700"
      id="work"
    >

    </Container>
    <Container
      bg="red.200"
      id="contact"
    >

    </Container>






  </>
)

export default Index
