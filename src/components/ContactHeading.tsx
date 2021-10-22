import React from 'react';
import { Flex, Heading } from '@chakra-ui/react';

const ContactHeading: React.FC = () => {
  return (
    <>
      <Flex
        // flexFlow="column wrap"
        flexDirection="column"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
        bg="blue.100"
        p={2}
      >
        <Heading>
          lets work together
        </Heading>
      </Flex>
    </>
  )
}

export default ContactHeading;
