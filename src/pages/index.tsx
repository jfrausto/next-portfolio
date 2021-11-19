import React from 'react';
import AboutMe from '../components/AboutMe';
import { Hero } from '../components/Hero';
// import {Flex, Text, Spacer} from '@chakra-ui/react';
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
      // bg="#C0C0C0"
      // boxShadow="0px 0px 10px"
    >
      <Hero />
    </Container>
    <AboutMe />
    <Portfolio />
    <Contact/>
  </>
)

export default Index
