import React from 'react';
import { Flex , Heading} from '@chakra-ui/react';
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
  return (
    <>
      <Flex
        direction={"column"}
        alignItems={"center"}
        justifyContent={"space-evenly"}
        alignContent={"space-around"}
        // bg="red.700"

      >

        <Heading size={"xl"}>
          Testimonials
        </Heading>
      

        <Flex
          flexDirection="column"
          flexWrap="wrap"
          justifyContent="space-around"
          alignItems="center"
          p={[2,4,4,4]}
          my={["30px", "40px", "40px" ,"50px"]}
          // w={"70vw"}
          // bg="blue.300"
          // height
          minH={"460px"}
          // width
          bg={"radial-gradient(circle at top left, rgba(208,138,138,0.38) 4%,  rgba(56,67,100,0.40) 55%), radial-gradient(circle at bottom right, rgba(68,79,185,0.55) 5%, rgba(49,60,90,0.40) 65%)"}
          borderRadius={"2xl"}
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
      </Flex>
    </>
  )
}

export default Testimonials;
