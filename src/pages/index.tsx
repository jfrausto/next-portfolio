import React from 'react';
import AboutMe from '../components/AboutMe';
import {Flex, Text, Spacer} from '@chakra-ui/react';
import { Container } from '../components/Container';

const Index: React.FC = () => (
  <>
    {/* Floating nav here */}
  
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
    >
      <Text
        mr={3}
      >
        hey
      </Text>
      {/* <Spacer/>  */}
      <Text
        ml={[2,2,16,24]}
        mr={[1,2,-4,-8]}
      >
        yo
      </Text>
      <Text
        mr={[1,2,-4,-8]}
      >
        ma
      </Text>
      <Text>ma</Text>
    </Flex>
  {/* three containers 100vh each */}
    <AboutMe />
    <Container
      bg="green.700"
    >

    </Container>
    <Container
      bg="red.700"
    >

    </Container>






  </>
)

export default Index
