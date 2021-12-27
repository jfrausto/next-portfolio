import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel,
  Flex, Box, Heading, VStack, Text, Grid,
  UnorderedList, ListItem
 } from "@chakra-ui/react";
import QuickFactsSection from './QuickFactsSection';
import TechnicalSkills from './TechnicalSkills';
import Bio from './Bio';

const AboutMeTabs: React.FC = () => {

  return (
    <>
        <Tabs 
          // w="100%"
          width={["360px", "500px" ,"550px", "550px"]}
          // minWidth={"550px"}
          isFitted 
          // variant="soft-rounded"
          variant="line"
          // colorScheme="facebook"
          colorScheme={"red"}
          pt={3}
        >
          <TabList
            // px={1}
            maxWidth={["60vw", "50vw", "40vw", "17vw"]}
            mx="auto"
          >
            <Tab mr={4} boxSize={16} fontSize={19}>me</Tab>
            <Tab ml={4} boxSize={16} fontSize={19}>technical</Tab>
          </TabList>
          <TabPanels
            pt={2}
          >
            <TabPanel>
              <Bio/>
            </TabPanel>
            <TabPanel>
              <TechnicalSkills/>
            </TabPanel>
          </TabPanels>
        </Tabs>

    </>
  )
}

export default AboutMeTabs
