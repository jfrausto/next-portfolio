import React from 'react';
import {
  Center,
  Box,
  Flex,
  Stack,
  VStack,
  Heading,
} from '@chakra-ui/react';
import QuickFactsSection from './QuickFactsSection';
import { Container } from './Container';
import AboutMeTabs from './AboutMeTabs';
import Headshot from './Headshot';

const AboutMe = () => {
  return (
    <>
      <Container
        pt={["11vh", "11vh", "0vh", "0vh"]}
        id="about"
        pb={8}
        mb={48}
      >
        <Stack
          as={Center}
          direction={["column", "column", "column", "row"]}
          justifyContent="center"
          justifyItems="center"
          alignItems="center"
          p={2}
          // bg="red.800"
        >

          <Flex
            flexDirection="column"
            wrap="nowrap"
            justifyContent="space-around"
            // alignContent="center"
            alignItems="center"
            borderRadius="md"
            // p={4}
            mr={["0", "0", "0", "28"]}
            mb={["8", "8", "8", "0"]}
            maxW={["80vw","70vw", "65vw", "37vw" ]}
            // bg="blue.900"
            minH="460px"
          >
            <Heading
              pt={4}
              size="4xl"
              mb={12}
            >
              Hi there!
            </Heading>
            <Headshot />
            <QuickFactsSection />
          </Flex>

          <Flex
            position={"relative"}
            top={4}
            justifyContent="center"
            alignItems="center"
            p={3}
            pt={2}
            // mt={16}
            borderRadius="md"
            maxWidth={["80vw", "70vw", "70vw", "550px"]}
            // bg="blue.900"
            bg="gray.700"
          >
            <AboutMeTabs />
          </Flex>

        </Stack>
    </Container>

    </>
  )
}

export default AboutMe;
