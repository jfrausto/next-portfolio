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
        pt={["11vh", "11vh", "7vh", "7vh"]}
        id="about"
        pb={8}
        mb={48}
      >
        {/* responsive stack stack */}
        <Stack
          as={Center}
          direction={["column", "column", "column", "row"]}
          justifyContent="center"
          justifyItems="center"
          alignItems="center"
          p={2}
        >

          {/* left side */}

          <Flex
            flexDirection="column"
            wrap="nowrap"
            justifyContent="space-around"
            alignItems="center"
            borderRadius="md"
            mr={["0", "0", "0", "28"]}
            mb={["8", "8", "8", "0"]}
            maxW={["84vw","70vw", "65vw", "37vw" ]}
            minH="460px"
          >
            <Heading
              p={4}
              px={16}
              size="4xl"
              mb={12}
              borderRadius={"full"}
              bg="#db5757"
              
            >
              Hi there!
            </Heading>
            <Headshot />
            <QuickFactsSection />
          </Flex>

          {/* right side */}

          <Flex
            position={"relative"}
            top={4}
            justifyContent="center"
            alignItems="center"
            p={[1,3,3,3]}
            pt={2}
            borderRadius="md"
            maxWidth={["84vw", "70vw", "70vw", "550px"]}
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
