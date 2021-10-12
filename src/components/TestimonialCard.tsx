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
        justifyContent="space-around"
        alignItems="center"
        alignContent="center"
        // height
        // width
      >
        {/* photo circle */}
        <Avatar mx={6} name={firstAndLastName} size="2xl" src={imgSrc} />

        {/* quote
          order={2} to reverse the middle order
        */}
        <Text
          fontSize="2xl"
        >
          This foo is quite possibly the sweetest ever. He is such a pleasure to work with.
        </Text>

      </Flex>
    </>
  )
}

export default TestimonialCard;
