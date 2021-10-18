import React from 'react';
import { Flex } from '@chakra-ui/react';
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
  return (
    <>
      <Flex
        flexDirection="column"
        flexWrap="wrap"
        justifyContent="space-around"
        alignItems="center"
        bg="blue.300"
        // height
          // width
      >
        <TestimonialCard 
          imgSrc="https://source.unsplash.com/3TLl_97HNJo/300x300" 
          firstAndLastName="Jesse Frausto" 
          flexDirection="row"
        />
        <TestimonialCard 
          imgSrc="https://source.unsplash.com/3TLl_97HNJo/300x300" 
          firstAndLastName="Jesse Frausto" 
          flexDirection="row-reverse"
        />
        <TestimonialCard 
          imgSrc="https://source.unsplash.com/3TLl_97HNJo/300x300" 
          firstAndLastName="Jesse Frausto" 
          flexDirection="row"
        />
      </Flex>
    </>
  )
}

export default Testimonials;
