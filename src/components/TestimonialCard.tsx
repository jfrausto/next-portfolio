import React from 'react';
import { Flex, Avatar, Text, VStack, FlexProps } from '@chakra-ui/react';

interface TestimonialCardProps{
  quote: string,
  author: string
  imgSrc: string, 
  firstAndLastName: string, 
  flexDirection: "row" | "row-reverse",
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ imgSrc, firstAndLastName, flexDirection, quote, author }) => {
  return (
    <>
      <Flex
        flexDirection={flexDirection}
        flexWrap="nowrap"
        justifyContent="space-evenly"
        alignItems="center"
        alignContent="center"
        // height
        // width={"100%"}
        // mb={5}
        // {...props}
      >
        {/* photo circle */}
        <VStack
          mx={1}
        >

        <Avatar 
          // mx={6} 
          name={firstAndLastName} 
          // size="xl"
          // size={["md", "lg" ,"xl" ,"2xl"]}
          // boxSize={28}
          boxSize={[90,20,24,28]}
          // size="2xl" 
          src={imgSrc} 
        />
        <Text>
          {author}
        </Text>
        </VStack>

        {/* quote
          order={2} to reverse the middle order
        */}
        <Text
          // fontSize="2xl"
          fontSize={["sm", "md", "lg", "lg"]}
          // maxW={["55vw", "50vw", "55vw", "40vw"]}
          maxW={["51vw", "50vw", "55vw", "640px"]}
          fontStyle="italic"
          textAlign={"center"}
          mx={1}
          px={[2, 2, 4, 4]}
          py={2}
        >
          "{quote}"
        </Text>

      </Flex>
    </>
  )
}

export default TestimonialCard;
