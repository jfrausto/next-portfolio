import React from 'react';
import { Flex, Avatar, Text } from '@chakra-ui/react';

interface TestimonialCardProps {
  imgSrc: string, 
  firstAndLastName: string, 
  flexDirection: "row" | "row-reverse"
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ imgSrc, firstAndLastName, flexDirection }) => {
  return (
    <>
      <Flex
        flexDirection={flexDirection}
        flexWrap="wrap"
        justifyContent="space-evenly"
        alignItems="center"
        alignContent="center"
        // height
        // width
      >
        {/* photo circle */}
        <Avatar 
          mx={6} 
          name={firstAndLastName} 
          // size="xl"
          // size={["md", "lg" ,"xl" ,"2xl"]}
          // boxSize={28}
          boxSize={[16,20,24,28]}
          // size="2xl" 
          src={imgSrc} 
        />

        {/* quote
          order={2} to reverse the middle order
        */}
        <Text
          // fontSize="2xl"
          fontSize={["sm", "md", "lg", "xl"]}
          maxW={["55vw", "50vw", "60vw", "65vw"]}
          fontStyle="italic"
          px={2}
        >
          This foo is quite possibly the sweetest ever. He is such a pleasure to work with.
        </Text>

      </Flex>
    </>
  )
}

export default TestimonialCard;
