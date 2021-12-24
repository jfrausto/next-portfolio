import React from 'react';
import {Flex, Image as ChakraImage, Box } from '@chakra-ui/react'

const Headshot = () => {
  return (
    <>
      <Flex
        // direction={["column", "column", "row", "row"]}
        direction="column"
        justifyContent="center"
        alignItems="center"
        maxW={["70vw","60vw", "45vw", "600px" ]}
        // maxH={ ["70vw","60vw", "37vw", "24vw"]}
        // borderRadius="3%"
        // bg="linear-gradient(#e66465, #9198e5)"
        m={6}
        mb={10}
      >
        <Box
          bg="radial-gradient(circle, rgba(238,174,174,1) 0%, rgba(148,187,233,1) 100%)"
          borderRadius="50%"
        >
          <ChakraImage
            justifyContent="center"
            justifyItems="center"
            alignContent="center"
            // public\static\images\jesse-transparent-discord
            src='/static/images/jesse-transparent-discord.png'
            objectFit="cover"
            // height="420px"
            height={["300px", "420px", "420px", "420px"]}
            width={["300px", "420px", "420px", "420px"]}
            borderRadius="50%"
            alt="it's me!"
            // bg="linear(to-l, crimson, dodgerblue)"
            // p={4}
          />
        </Box>

      </Flex>
    </>
  )
}

export default Headshot
