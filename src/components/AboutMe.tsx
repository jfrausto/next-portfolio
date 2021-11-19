import React from 'react';
import {
  Center,
  Box,
  Flex,
  Stack,
  VStack,
  Image as ChakraImage,
  Heading,
} from '@chakra-ui/react';
import AboutMeTags from './AboutMeTags';
import QuickFactsSection from './QuickFactsSection';
import { Container } from './Container';

const AboutMe = () => {
  return (
    <>
      <Container
        // bg="blue.700"
        pt={["11vh", "11vh", "0vh", "0vh"]}
        // bg="gray.50"
        id="about"
      >

        <Stack
          as={Center}
          direction={["column", "column", "row", "row"]}
          justifyContent="center"
          justifyItems="center"
          p={2}
        >
          <Flex
            direction={["column", "column", "row", "row"]}
            justifyContent="center"
            alignItems="center"
            maxW={["50vw","45vw", "30vw", "28vw" ]}
            borderRadius="100%"
            bg="linear-gradient(#e66465, #9198e5)"
            
          >
            <ChakraImage
              justifyContent="center"
              justifyItems="center"
              alignContent="center"
              // public\static\images\jesse-transparent-discord
              src='/static/images/jesse-transparent-discord.png'
              objectFit="contain"
              borderRadius="100%"
              alt="it's me!"
              bg="linear(to-l, crimson, dodgerblue)"

              />
            </Flex>
          <VStack 
            justifyContent="center"
            pl={2}
          >
            <Box
              maxW="50ch"
            >
              <Heading textDecoration="underline crimson" pb={2} textAlign={["center", "center", "left", "left"]}>
                Nice to meet you!
              </Heading>
              <Heading 
                mb={3}
                textAlign={["center", "center", "left", "left"]}
                textDecoration="italic" as="h3" size="sm"
              >
                -- Technical Skills --
              </Heading>

              <AboutMeTags />

              <Heading 
                mt={3}
                mb={1}
                textAlign={["center", "center", "left", "left"]}
                textDecoration="italic" as="h3" size="sm"
              >
                -- Quick Facts --
              </Heading>
              
              <QuickFactsSection />

              </Box>
          </VStack>
        </Stack>
    </Container>

    </>
  )
}

export default AboutMe;
