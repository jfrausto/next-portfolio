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
import AboutMeTabs from './AboutMeTabs';

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
          direction={["column", "column", "column", "row"]}
          justifyContent="center"
          justifyItems="center"
          p={2}
        >
          <Flex
            flexDirection="column"
            wrap="nowrap"
            justifyContent="center"
            alignContent="center"
            alignItems="center"
            borderRadius="md"
            p={5}
            // h="100vh"
            maxW={["70vw","70vw", "70vw", "37vw" ]}
            bg="gray.700"
          >
            {/* image container */}
            <Flex
              // direction={["column", "column", "row", "row"]}
              direction="column"
              justifyContent="center"
              alignItems="center"
              maxW={["70vw","70vw", "70vw", "37vw" ]}
              borderRadius="3%"
              bg="linear-gradient(#e66465, #9198e5)"
              
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

              />
            </Flex>

            {/* Details Card container */}
            <Flex
              borderRadius="md"
              bg="gray.700"
              p={4}
              m={4}
              // minH="400px"
              maxW="400px"
            >
              <QuickFactsSection />
            </Flex>


          </Flex>

            <AboutMeTabs />
          {/* <VStack 
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
          </VStack> */}
        </Stack>
    </Container>

    </>
  )
}

export default AboutMe;
