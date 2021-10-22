import React from 'react';
import {Flex, Button, Link} from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaGoogle } from "react-icons/fa";


const ContactButtons = () => {
  return (
    <>
      <Flex
        flexDirection="row"
        flexWrap="wrap"
        alignContent="space-around"
        justifyContent="space-evenly"
        alignItems="center"
        w="75vw"
        h="17vh"
        bg="blue.500"
      >
        {/* buttons */}
        <Button  as="a"
          target="_blank" 
          variant="outline" 
          href="https://github.com/jfrausto" 
          textTransform="lowercase" 
          leftIcon={<FaGithub />}
        >
          Github
        </Button>
        {/* buttons */}

        <Button  as="a"
          target="_blank" 
          variant="outline" 
          href="https://www.linkedin.com/in/jesse-f-9182331ab/" 
          textTransform="lowercase" 
          leftIcon={<FaLinkedin />}
        >
          Linkedin
        </Button>
        {/* buttons */}

        <Button as="a"
          target="_blank" 
          variant="outline" 
          href="mailto:fraustojesse24@gmail.com" 
          textTransform="lowercase" 
          leftIcon={<FaGoogle />}
        >
          fraustojesse24@gmail.com
        </Button>
      </Flex>
    </>
  )
}

export default ContactButtons;
