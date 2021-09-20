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

const AboutMe = () => {
  return (
    <>
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
        >
          <ChakraImage
            justifyContent="center"
            justifyItems="center"
            alignContent="center"
            src='/static/images/jesse_shopped_cropped.jpg'
            objectFit="contain"
            borderRadius="full"
            alt="it's me!"
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
    </>
  )
}

export default AboutMe;
