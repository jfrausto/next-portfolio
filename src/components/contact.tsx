import { Heading, Flex, Text, Icon,
  Box, Wrap, WrapItem, Button, 
  List, ListIcon, ListItem, useColorMode, Avatar } from '@chakra-ui/react'
import React from 'react';
import {Container} from './Container'
import ContactHeading from './ContactHeading';
import Takeaways from './Takeaways';
import Testimonials from './Testimonials';
import ContactCard from './ContactCard';


const Contact: React.FC = () => {

  
  const {colorMode} = useColorMode();

  const iconColors = {
    light: "brand.500",
    dark: "brand.300"
  }
  const fontColors = {
    light: "brand.900",
    dark: "brand.100"
  }

  return (
    <>
    <Container
      id="contact"
      // ! make this responsive to dial it in
      pt={[20, 16, 10, 10]}
      // !
      justifyContent="space-evenly"
    >

      <ContactHeading />
      <Takeaways />
      <Testimonials />

      <ContactCard/>
      {/* 
        add a button for a modal form to pop out so you can 
        send a message to me 
      */}

    </Container>

    </>
  )
}

export default Contact;
