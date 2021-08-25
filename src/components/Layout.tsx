import React from 'react';
import { Box, Flex, useColorMode, FlexProps } from '@chakra-ui/react'
import { Container } from './Container';
import { Hero } from '../components/Hero';
import { DarkModeSwitch } from '../components/DarkModeSwitch';
import { Main } from '../components/Main';




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
        <Main>
          {props.children}
        </Main>
        {/* footer ?  */}
      </Container>

    </Box>
    </>
  )
}

export default Layout
