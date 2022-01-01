import React from 'react';
import {Flex, Image as ChakraImage, Box } from '@chakra-ui/react'

const Headshot = () => {
  return (
    <>
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        maxW={["70vw","60vw", "45vw", "600px" ]}
        m={6}
        mb={10}
      >
        {/* bg gradient on bg box; image is a .png */}
        <Box
          bg="radial-gradient(circle, rgba(238,174,174,0.55) 5%, rgba(148,187,233,0.80) 75%)"
          borderRadius="50%"
        >
          <ChakraImage
            justifyContent="center"
            justifyItems="center"
            alignContent="center"
            src='/static/images/jesse-transparent-discord.png'
            objectFit="cover"
            height={["300px", "420px", "420px", "420px"]}
            width={["300px", "420px", "420px", "420px"]}
            borderRadius="50%"
            alt="it's me!"
          />
        </Box>

      </Flex>
    </>
  )
}

export default Headshot
