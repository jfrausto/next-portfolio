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
      height="200vh"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
    >
      <DarkModeSwitch />
      {/* container for full page hero */}
      <Flex
        height="100vh"
        direction="column"
        alignItems="center"
        justifyContent="flex-start"
      >
        <Hero />
      </Flex>

      {/* container for navigation and main content */}
      <Container>
        {/* ? navigation ? */}
        <Stack
          p={1}
          direction={["column", "column", "row", "row"]}
          justifyContent="center"
          alignItems="center"
          height="100vh"
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          // bgClip="text"
        >
          <NavBar />

        <Main>
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
