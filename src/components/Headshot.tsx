import React from 'react';
import {Flex, Image as ChakraImage } from '@chakra-ui/react'

const Headshot = () => {
  return (
    <>
      <Flex
        // direction={["column", "column", "row", "row"]}
        direction="column"
        justifyContent="center"
        alignItems="center"
        maxW={["70vw","60vw", "37vw", "24vw" ]}
        borderRadius="3%"
        bg="linear-gradient(#e66465, #9198e5)"
        m={6}
        
      >
        <ChakraImage
          justifyContent="center"
          justifyItems="center"
          alignContent="center"
          // public\static\images\jesse-transparent-discord
          src='/static/images/jesse-transparent-discord.png'
          objectFit="contain"
          borderRadius="3%"
          alt="it's me!"
          bg="linear(to-l, crimson, dodgerblue)"
          // p={4}

        />
      </Flex>
    </>
  )
}

export default Headshot
