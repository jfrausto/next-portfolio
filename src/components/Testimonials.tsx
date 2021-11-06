import React from 'react';
import { Flex , Heading} from '@chakra-ui/react';
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
  return (
    <>

      

      <Flex
        flexDirection="column"
        flexWrap="wrap"
        justifyContent="space-around"
        alignItems="center"
        my={["30px", "40px", "40px" ,"50px"]}

        // bg="blue.300"
        // height
          // width
      > 

        <Heading
          size="xl"
        >
          Testimonials
        </Heading>

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
