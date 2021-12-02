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
          w="100%" 
          isFitted 
          variant="soft-rounded" 
          colorScheme="facebook"
          pt={3}
        >
          <TabList
            px={2}
            maxWidth={["60vw", "50vw", "40vw", "17vw"]}
            mx="auto"
          >
            <Tab mr={4}>me</Tab>
            <Tab ml={4}>technical</Tab>
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
