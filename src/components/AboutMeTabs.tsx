import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel,
  Flex, Box, Heading, VStack, Text, Grid,
  UnorderedList, ListItem
 } from "@chakra-ui/react";
import QuickFactsSection from './QuickFactsSection';
import AboutMeTags from './AboutMeTags';

const AboutMeTabs: React.FC = () => {

  const techSkills: String[] = [
    "JavaScript", "TypeScript", "React", "Next.js",
    "HTML", "CSS", "Framer Motion",
    "Webpack", "Express", "MongoDB",
    "Socket.io", "JQuery", "MySQL",
    "Bootstrap", "MAterialize", "Chakra UI",
    "Firebase"
  ];

  return (
    <>
        <Tabs 
          w="100%" 
          isFitted 
          variant="soft-rounded" 
          colorScheme="facebook"
          pt={3}
          // bg="black"
          // bg="green.700"
          // mx="auto"
        >
          <TabList
            // mx={4}
            px={2}
            maxWidth={["60vw", "50vw", "40vw", "17vw"]}
            // bg="black"
            mx="auto"
          >
            <Tab mr={4}>me</Tab>
            <Tab ml={4}>technical</Tab>
          </TabList>
{/* put a box in each panel and make height equal */}
          <TabPanels
            // bg="red.400"
            pt={2}
          >
            <TabPanel
            >
              <Flex
                // h={["75vh", "75vh", "55vh", "55vh"]}
                // w={["75vw", "75vw", "53vw", "55vw"]}
                flexFlow="column nowrap"
                // h="80%"
                // minH="460px"
                // maxH="460px"
                h="460px"
                pl={4}
                // maxH={["", "510px"]}
                overflowY="auto"
              >

              <Text
                fontSize="sm"
                maxW="90%"
              > 
                Welcome! I’m from East Los Angeles, California and I love coding, creating, and exploring the web. 
                I have a passion for building intuitive applications that are useful and fun to navigate. 
                I enjoy using technology such as JavaScript, React, and NodeJs
                to capture the client's mission and deliver a product with clear, concise, and robust code.
              </Text>
              <br/>
              <Text
                fontSize="sm"
                maxW="90%"

              >
                When I work with a team my role is best described as a "glue" guy. 
                I like to keep morale and productivity high by looking at the bright side of things to keep the team together. 
                Communication is very important to me and I believe it is the cornerstone for any successful project. 
                I value high spirits during the development process as it always seems help create a better product.
              </Text>
              <br/>

              <Text
                fontSize="sm"
                maxW="90%"

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
            <TabPanel
            >
              {/* <p>two!</p> */}
              <Flex 
                direction="column"
                justifyContent="flex-start"
                alignItems="center"
                minH="460px"
                // w="80%"
              >
                <Heading 
                  // mb={3}
                  textAlign={["center", "center", "left", "left"]}
                  textDecoration="italic" as="h3" size="sm"
                >
                  Skills
                </Heading>

                <Grid templateColumns="repeat(2, 1fr)" 
                  // gap={1} 
                  columnGap={["4", "6", "8", "12"]}
                  // bg="gray.100" 
                  p={2} 
                  // minW="380px"
                >
                  
                  {
                    techSkills.map( (skill) => {
                      return (<Flex 
                        w="100%" 
                        direction="column" 
                        justifyContent="center" 
                        alignItems="flex-start"
                        pl={3} 
                        h="10" 
                        // bg="blue.500"
                      >
                        <UnorderedList>
                          <ListItem>
                            {skill}
                          </ListItem>
                        </UnorderedList>

                      </Flex>)
                    }
                    )
                  }
                </Grid>
              </Flex>
            </TabPanel>
          </TabPanels>
        </Tabs>

    </>
  )
}

export default AboutMeTabs
