import React from 'react';
import { Flex, Heading } from '@chakra-ui/react';

const ContactHeading: React.FC = () => {
  return (
    <>
      <Flex
        // flexFlow="column wrap"
        // mt="1.8rem"
        flexDirection="column"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
        // bg="blue.100"
        // p={2}
        // mb={"1rem"}
      >
        <Heading
          size="4xl"
          textAlign="center"
        >
          Lets Work Together
        </Heading>
      </Flex>
    </>
  )
}

export default ContactHeading;
