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
            maxW={["80vw","70vw", "60vw", "37vw" ]}
            bg="blue.900"
            minH="460px"
          >
            <Headshot />
            <QuickFactsSection />
          </Flex>

          <Flex
            justifyContent="center"
            alignItems="center"
            p={3}
            borderRadius="md"
            width={["80vw", "70vw", "60vw", "30vw"]}
            bg="blue.900"
          >
            <AboutMeTabs />
          </Flex>

        </Stack>
    </Container>

    </>
  )
}

export default AboutMe;
