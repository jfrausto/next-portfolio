import React from 'react';
import {Flex, Heading, Spacer} from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaGoogle, FaFileAlt } from "react-icons/fa";
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { ContactCardLink } from './ContactCardLink';
import { MessageModal } from './MessageModal';


const ContactCard: React.FC = () => {
  return (
    <>
      <Flex
        flexDirection="column"
        alignContent="space-around"
        justifyContent="space-evenly"
        alignItems="center"
        w="75vw"
        minH="600px"
        // bg="blue.600"
      >
        <Heading>
          Contact Me
        </Heading>
        {/* links */}
        <Flex
          p={8}
          bg="gray.700"
          borderRadius="md"
          // h="69%"
          h={["420px", "420px", "420px", "420px"]}
          // w="30%"
          flexDirection="column"
          alignContent="flex-start"
          justifyContent="space-evenly"
          alignItems="flex-start"
        >
          <ContactCardLink
            iconImg={FaGithub}
            link={"https://github.com/jfrausto"}
            text={"Github"}
          />
          <ContactCardLink
            iconImg={FaLinkedin}
            link={"https://www.linkedin.com/in/jesse-f-9182331ab/"}
            text={"LinkedIn"}
          />
          <ContactCardLink
            iconImg={FaGoogle}
            link={"mailto:fraustojesse24@gmail.com"}
            text={"fraustojesse24@gmail.com"}
          />
          <ContactCardLink
            iconImg={FaFileAlt}
            link={"https://chakra-ui.com"}
            text={"Resume"}
          />

          <Spacer/>
          <MessageModal />

        </Flex>
      </Flex>
    </>
  )
}

export default ContactCard;
