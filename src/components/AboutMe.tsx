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
        pb={8}
      >

        <Stack
          as={Center}
          direction={["column", "column", "column", "row"]}
          justifyContent="center"
          justifyItems="center"
          alignItems="center"
          p={2}
        >
          <Flex
            flexDirection="column"
            wrap="nowrap"
            justifyContent="center"
            alignContent="center"
            alignItems="center"
            borderRadius="md"
            p={4}
            mr={["0", "0", "0", "20"]}
            mb={["8", "8", "8", "0"]}
            // h="100vh"
            maxW={["80vw","70vw", "60vw", "37vw" ]}
            bg="blue.900"
            minH="460px"
          >
            {/* image container */}
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

            {/* Details Card container */}
            <Flex
              borderRadius="md"
              // bg="red.500"
              bg="blue.700"
              p={3}
              m={2}
              // minH="400px"
              maxW="420px"
            >
              <QuickFactsSection />
            </Flex>


          </Flex>


          <Flex
              // this container needs a responsive set width and height 
              // for justify and align items to take effect
              // it will be the container stacked next to my pfp
              justifyContent="center"
              alignItems="center"
              p={3}
              
              // ml={["0", "0", "0", "10"]}
              // ml={}
              // marginLeft={["0", "0", "0", "10px"]}
              borderRadius="md"
              //  h={8}
              // minH="600px"
              // w={["80vw", "75vw", "60vw", "40vw"]}
              width={["80vw", "70vw", "60vw", "30vw"]}
              //  w={8}
              bg="blue.900"
            >
              <AboutMeTabs />
            </Flex>
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
