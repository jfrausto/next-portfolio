import { Flex, FlexProps } from '@chakra-ui/react'

export const Main = (props: FlexProps) => (
  <Flex
    direction="column"
    alignItems="center"
    justifyContent="center"
    // p={1}
    minH="92vh"
    minW={["100vw", "75vw", "90vw", "80vw"]}
    bgGradient="linear(to-l, #1228AC, green)"
    {...props}
  />
)
