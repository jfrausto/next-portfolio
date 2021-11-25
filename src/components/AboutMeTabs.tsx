import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel,
  Flex, Box, Heading, VStack, Text } from "@chakra-ui/react";
import QuickFactsSection from './QuickFactsSection';
import AboutMeTags from './AboutMeTags';

const AboutMeTabs = () => {
  return (
    <>
      <Flex
        // this container needs a responsive set width and height 
        // for justify and align items to take effect
        // it will be the container stacked next to my pfp
        justifyContent="center"
        alignItems="center"
        //  h={8}
        // minH="600px"
        w={["80vw", "75vw", "60vw", "40vw"]}
        //  w={8}
        bg="blue.500"
      >

        <Tabs isFitted variant="soft-rounded">
          <TabList>
            <Tab>me</Tab>
            <Tab>quick facts</Tab>
          </TabList>
{/* put a box in each panel and make height equal */}
          <TabPanels>
            <TabPanel>
              <Flex
                // h={["75vh", "75vh", "55vh", "55vh"]}
                // w={["75vw", "75vw", "53vw", "55vw"]}
                flexFlow="column nowrap"
                // h="80%"
                minH="520px"
                // maxH={["", "510px"]}
              >

              <Text
                fontSize="sm"
              > 
                Welcome! I’m from East Los Angeles, California and I love coding, creating, and exploring the web. 
                I have a passion for building intuitive applications that are useful and fun to navigate. 
                I enjoy using technology such as JavaScript, React, and NodeJs
                to capture the client's mission and deliver a product with clear, concise, and robust code.
              </Text>
              <br/>
              <Text
                fontSize="sm"
              >
                When I work with a team my role is best described as a "glue" guy. 
                I like to keep morale and productivity high by looking at the bright side of things to keep the team together. 
                Communication is very important to me and I believe it is the cornerstone for any successful project. 
                I value high spirits during the development process as it always seems help create a better product.
              </Text>
              <br/>

              <Text
                fontSize="sm"
              >
                The bottom line is I love to solve problems. 
                I live for those "Aha!" breakthrough moments! 
                I like working on back-end development figuring out the underlying connections and intricacies in each application I build.
                Working on front-end development, putting on the "makeup", and creating responsive web design is a joy. 
                I like working with different types of people. 
                I believe this passion during the development process can be felt by the people around me, 
                and creates a product that exceeds expectations.
              </Text>
              </Flex>
            </TabPanel>
            <TabPanel>
              {/* <p>two!</p> */}
              <VStack 
            justifyContent="center"
            // minH={["70vh", "70vh", "55vh", "55vh"]}
            // h="80%"
            minH="520px"

            // w={["75vw", "75vw", "53vw", "55vw"]}
            pl={2}
          >
            <Box
              // maxW="50ch"
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
            </TabPanel>
          </TabPanels>
        </Tabs>

      </Flex>
    </>
  )
}

export default AboutMeTabs
