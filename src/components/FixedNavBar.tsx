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
        minHeight="7vh"
        width="100vw"
        alignItems="center"
        justifyContent="space-evenly"
        direction="row"
        // bg="radial-gradient(circle, rgba(38,38,38,0.80) 55%, rgba(8,8,8,0.80) 100%)"
        bg="radial-gradient(circle, rgba(33,33,33,0.80) 55%, rgba(8,8,8,0.80) 100%)"
        // bg="radial-gradient(circle, rgba(66,77,110,0.80) 55%, rgba(8,8,8,0.80) 100%)"
        // opacity={"0.95"}
        // backdropFilter={"auto"}
        // backdropBlur={"5px"}
        style={{ 
          backdropFilter: "blur(12px)"
        }}
        // border="1px solid "
        borderBottom="1px solid #c9c9c9"

        zIndex={99}
        // boxShadow="0 0 4px"
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
          connect
        </Link>
      </Flex>
    </>
  )
}

export default FixedNavBar;
