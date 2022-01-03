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
        pb={72}
        // mb={48}
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
            position={"relative"}
            right={[0,0,0,"5vw"]}
            wrap="nowrap"
            justifyContent="space-around"
            alignItems="center"
            borderRadius="md"
            // mr={[0,0,0,"4vw"]}
            mb={[8, 8,8,0]}
            maxW={["84vw","70vw", "65vw", "37vw" ]}
            minH="460px"
          >
            <Heading
              p={4}
              px={10}
              size="4xl"
              textAlign="center"

              // mb={4}
              borderRadius={"3xl"}
              // bg="#db5757"
              // bg="linear-gradient(43deg, rgba(205,30,30,1) 0%, rgba(199,79,79,1) 93%)"
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
            left={[0,0,0,"5vw"]}
            justifyContent="center"
            alignItems="center"
            // ml={[0,0,0,16]}
            p={[1,3,3,3]}
            pt={2}
            borderRadius="2xl"
            // border="1px solid #c9c9c9"
            maxWidth={["84vw", "70vw", "70vw", "550px"]}
            // bg="linear-gradient(43deg, rgba(205,30,30,0.75) 0%, rgba(199,79,79,0.75) 93%)"
            // bg="radial-gradient(circle, rgba(40,25,25,0.80) 15%, rgba(101,0,0,0.78) 100%)"
            // bg="radial-gradient(circle, rgba(101,0,0,0.78) 15%, rgba(40,25,25,0.90) 100%)"
            bg="radial-gradient(circle, rgba(208,138,138,0.25) 0%, rgba(66,77,110,0.70) 80%)"

            // bg="linear-gradient(45deg, rgba(40,25,25,0.80) 0%, rgba(101,0,0,0.78) 100%)"
          >
            <AboutMeTabs />
          </Flex>

        </Stack>
    </Container>

    </>
  )
}

export default AboutMe;
