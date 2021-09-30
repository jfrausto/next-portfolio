import React from 'react';
import {Flex, Text, Link} from '@chakra-ui/react';

const FixedNavBar = () => {
  return (
    <>
      <Flex
        position="fixed"
        top={0}
        pt={1}
        px={[1,4,8,32]}
        minHeight="10vh"
        width="100vw"
        alignItems="center"
        justifyContent="space-evenly"
        direction="row"
        bg="gray.100"
        zIndex={99}
      >
        <Link
          mr={3}
          href="#hero"
        >
          Jesse Frausto
        </Link>
        {/* <Spacer/>  */}
        <Link
          href="#about"
          ml={[2,2,16,24]}
          mr={[1,2,-4,-8]}
        >
          about
        </Link>
        <Link
          mr={[1,2,-4,-8]}
          href="#work"
          >
          portfolio
        </Link>
        <Link
        href="#contact"
        >
          contact
        </Link>
      </Flex>
    </>
  )
}

export default FixedNavBar;
