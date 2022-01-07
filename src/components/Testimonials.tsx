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
        p={[2,4,4,4]}
        my={["30px", "40px", "40px" ,"50px"]}
        // w={"70vw"}
        // bg="blue.300"
        // height
        minH={"460px"}
          // width
          bg={"gray.700"}
          borderRadius={"2xl"}
      > 

        <Heading
          size="xl"
          pb={2}
        >
          testimonials
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
