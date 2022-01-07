import React from 'react';
import {Flex, Button, Link, Heading, Icon} from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaGoogle, FaFileAlt } from "react-icons/fa";
import { ExternalLinkIcon } from '@chakra-ui/icons'


const ContactCard = () => {
  return (
    <>
      <Flex
        flexDirection="column"
        alignContent="space-around"
        justifyContent="space-evenly"
        alignItems="center"
        w="75vw"
        h="50vh"
      >
        <Heading>
          contact me
        </Heading>
        {/* links */}
        <Flex
          p={8}
          bg="gray.700"
          borderRadius="md"
          // h="69%"
          h={["280px", "320px", "320px", "320px"]}
          // w="30%"
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
      </Flex>
    </>
  )
}

export default ContactCard;
