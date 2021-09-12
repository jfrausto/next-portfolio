import React from 'react';
import { Box, Flex, useColorMode, FlexProps, Stack } from '@chakra-ui/react'
import { Container } from './Container';
import { Hero } from '../components/Hero';
import { DarkModeSwitch } from '../components/DarkModeSwitch';
import { Main } from '../components/Main';
import NavBar from './NavBar';

const Layout: React.FC = (props) => {
  const { colorMode } = useColorMode();
  const bgColor = { light: 'gray.50', dark: 'gray.900' };
  const color = { light: 'black', dark: 'white' };

  return (
    <>
    <Box
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      overflowX="hidden"
      overflowY="hidden"
      fontSize={["sm","md", "lg", "xl"]}
    >
      <DarkModeSwitch />
      {/* container for full page hero */}
      <Flex
        height="100vh"
        direction="column"
        alignItems="center"
        justifyContent="flex-start"
        px={[ 2, 4, 6, 8 ]}
      >
        <Hero />
      </Flex>

      {/* flex container for nav and main routing content */}
      <Container>
        <Stack
          px={[0, 0, 2, 2]}
          direction={["column", "column", "row", "row"]}
          justifyContent="center"
          alignItems="center"
          // height="100vh"
          minW="100vw"
          bgGradient="linear(to-r, #7928CA, #FFCCC0)"

          // bgClip="text"
        >
          <NavBar />

          <Main> 
            {/* flex container */}
            {props.children}
          </Main>
        {/* footer ?  */}
        </Stack>
      </Container>

    </Box>
    </>
  )
}

export default Layout
