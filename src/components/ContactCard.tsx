import React from 'react';
import {Flex, Button, Link, Heading, Icon} from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaGoogle, FaFileAlt } from "react-icons/fa";
import { ExternalLinkIcon } from '@chakra-ui/icons'


const ContactCard = () => {
  return (
    <>
      <Flex
        flexDirection="column"
        // flexWrap="wrap"
        alignContent="space-around"
        justifyContent="space-evenly"
        alignItems="center"
        w="75vw"
        h="50vh"
        // bg="blue.500"
      >
        <Heading>
          contact me
        </Heading>
        {/* buttons */}
        <Flex
          p={8}
          bg="gray.200"
          borderRadius="md"
          h="65%"
          flexDirection="column"
          alignContent="flex-start"
          justifyContent="space-evenly"
          alignItems="flex-start"
        >
          
          <Flex
            flexDirection="row"
            justifyContent="flex-start"
            wrap="nowrap"
            alignItems="center"
          >
            <Icon
              as={FaGithub}
              w={12}
              h={12}
              pr={4}
            />
            <Link href="https://github.com/jfrausto" isExternal>
              github
            </Link>
          </Flex>
          <Flex
            flexDirection="row"
            justifyContent="flex-start"
            wrap="nowrap"
            alignItems="center"
          >
            <Icon
              as={FaLinkedin}
              w={12}
              h={12}
              pr={4}
            />
            <Link href="https://www.linkedin.com/in/jesse-f-9182331ab/" isExternal>
              linkedin
            </Link>
          </Flex>
          <Flex
            flexDirection="row"
            justifyContent="flex-start"
            wrap="nowrap"
            alignItems="center"
          >
            <Icon
              as={FaGoogle}
              w={12}
              h={12}
              pr={4}
            />
            <Link href="mailto:fraustojesse24@gmail.com" isExternal>
              fraustojesse24@gmail.com
            </Link>
          </Flex>
          <Flex
            flexDirection="row"
            justifyContent="flex-start"
            wrap="nowrap"
            alignItems="center"
          >
            <Icon
              as={FaFileAlt}
              w={12}
              h={12}
              pr={4}
            />
            <Link href="https://chakra-ui.com" isExternal>
              resume
            </Link>
          </Flex>

        </Flex>
        {/* <Button  as="a"
          target="_blank" 
          variant="outline" 
          href="https://github.com/jfrausto" 
          textTransform="lowercase" 
          leftIcon={<FaGithub />}
        >
          Github
        </Button> */}
        {/* buttons */}
{/* 
        <Button  as="a"
          target="_blank" 
          variant="outline" 
          href="https://www.linkedin.com/in/jesse-f-9182331ab/" 
          textTransform="lowercase" 
          leftIcon={<FaLinkedin />}
        >
          Linkedin
        </Button> */}
        {/* buttons */}

        {/* <Button as="a"
          target="_blank" 
          variant="outline" 
          href="mailto:fraustojesse24@gmail.com" 
          textTransform="lowercase" 
          leftIcon={<FaGoogle />}
        >
          fraustojesse24@gmail.com
        </Button> */}
      </Flex>
    </>
  )
}

export default ContactCard;
