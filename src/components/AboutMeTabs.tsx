import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel,
  Flex, Box, Heading, VStack, Text, Grid,
  UnorderedList, ListItem
 } from "@chakra-ui/react";
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
        p={2}
        borderRadius="md"
        //  h={8}
        // minH="600px"
        w={["80vw", "75vw", "60vw", "40vw"]}
        //  w={8}
        bg="blue.500"
      >

        <Tabs w="100%" isFitted variant="soft-rounded" bg="green.700">
          <TabList
            mx={4}
            px={2}
          >
            <Tab px={2} mx={2}>me</Tab>
            <Tab px={2} mx={2}>technical</Tab>
          </TabList>
{/* put a box in each panel and make height equal */}
          <TabPanels
            // bg="red.400"
          >
            <TabPanel
            >
              <Flex
                // h={["75vh", "75vh", "55vh", "55vh"]}
                // w={["75vw", "75vw", "53vw", "55vw"]}
                flexFlow="column nowrap"
                // h="80%"
                minH="460px"
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
                  gap={5} 
                  bg="gray.100" 
                  p={4} 
                  minW="300px"
                >
                  <Flex 
                    w="100%" 
                    direction="column" 
                    justifyContent="center" 
                    alignItems="flex-start"
                    pl={3} 
                    h="10" 
                    bg="blue.500"
                  >
                    <UnorderedList>
                      <ListItem>
                        React
                      </ListItem>
                    </UnorderedList>

                  </Flex>

                  <Flex 
                    w="100%" 
                    direction="column" 
                    justifyContent="center" 
                    alignItems="flex-start"
                    pl={3}
                    h="10" 
                    bg="blue.500"
                  >
                    <UnorderedList>
                      <ListItem>
                        Javascript
                      </ListItem>
                    </UnorderedList>

                  </Flex>

                  <Flex 
                    w="100%" 
                    direction="column" 
                    justifyContent="center" 
                    alignItems="flex-start"
                    pl={3}  
                    h="10" 
                    bg="blue.500"
                  >
                    <UnorderedList>
                      <ListItem>
                        Typescript
                      </ListItem>
                    </UnorderedList>

                  </Flex>

                  <Flex 
                    w="100%" 
                    direction="column" 
                    justifyContent="center" 
                    alignItems="flex-start"
                    pl={3}  
                    h="10" 
                    bg="blue.500"
                  >
                    <UnorderedList>
                      <ListItem>
                        MongoDB
                      </ListItem>
                    </UnorderedList>

                  </Flex>

                  <Flex 
                    w="100%" 
                    direction="column" 
                    justifyContent="center" 
                    alignItems="flex-start"
                    pl={3}  
                    h="10" 
                    bg="blue.500"
                  >
                    <UnorderedList>
                      <ListItem>
                        NodeJs
                      </ListItem>
                    </UnorderedList>

                  </Flex>

                  <Flex 
                    w="100%" 
                    direction="column" 
                    justifyContent="center" 
                    alignItems="flex-start"
                    pl={3}  
                    h="10" 
                    bg="blue.500"
                  >
                    <UnorderedList>
                      <ListItem>
                        Express
                      </ListItem>
                    </UnorderedList>
                  </Flex>
                  <Flex 
                    w="100%" 
                    direction="column" 
                    justifyContent="center" 
                    alignItems="flex-start"
                    pl={3} 
                    h="10" 
                    bg="blue.500"
                  >
                    <UnorderedList>
                      <ListItem>
                        Chakra UI
                      </ListItem>
                    </UnorderedList>
                  </Flex>
                  <Flex 
                    w="100%" 
                    direction="column" 
                    justifyContent="center" 
                    alignItems="flex-start"
                    pl={3}  
                    h="10" 
                    bg="blue.500"
                  >
                    <UnorderedList>
                      <ListItem>
                        socket.io
                      </ListItem>
                    </UnorderedList>
                  </Flex>
                </Grid>
              {/* <AboutMeTags /> */}

            
              </Flex>
            </TabPanel>
          </TabPanels>
        </Tabs>

      </Flex>
    </>
  )
}

export default AboutMeTabs
