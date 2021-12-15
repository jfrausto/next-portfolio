import React from 'react';
import { Flex, Heading, Text, LinkBox, Box, 
  List, ListItem, ListIcon, ButtonGroup, Button } from '@chakra-ui/react';
import { SettingsIcon, ExternalLinkIcon } from '@chakra-ui/icons';
import { FaGithub } from 'react-icons/fa';

interface ProjectCardProps {
  project: string,
  video: any,
  prod: string,
  code: string,
  tags: any,
  desc: string
}


const ProjectCard:React.FC<ProjectCardProps> = ({ project, video, prod, code, tags, desc}) => {
  return (
    <>
      <Flex
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        // sx={{ 
        //   gap: '20px'
        // }}
        maxW={['80vw', '500px', '500px', '500px']}
        bg="gray.700"
        p={3}
        m={4}
      >

        <Heading m={3}>
          {project}
        </Heading>

        <Box m={3}>          
          <video autoPlay={true} loop={true}>
            <source src={video} type="video/mp4" />
          </video>
        </Box>

        <Text m={2}>
          {desc}
        </Text>

        <List mx={3} my={1}>
          <ListItem>
            <ListIcon as={SettingsIcon} />
            {tags}
          </ListItem>
        </List>

        <LinkBox as={ButtonGroup} 
          variant="solid" 
          m={3}
          spacing={['3', '5', '5', '5']}
        >
          {/* <LinkOverlay href={code}> */}
            <Button leftIcon={<FaGithub />} as='a' href={code} >
              source
            </Button>
          {/* </LinkOverlay> */}

          {/* <LinkOverlay href={prod}> */}
            <Button rightIcon={<ExternalLinkIcon/>} colorScheme={'green'} as='a' href={prod}>
              visit app
            </Button>
          {/* </LinkOverlay> */}
        </LinkBox>
      </Flex>
    </>
  )
}

export default ProjectCard;
