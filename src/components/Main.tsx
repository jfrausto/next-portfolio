import { Flex, FlexProps } from '@chakra-ui/react'

export const Main = (props: FlexProps) => (
  <Flex
    direction="column"
    alignItems="center"
    justifyContent="center"
    // p={1}
    minH="90vh"
    minW={["100vw", "75vw", "75vw", "75vw"]}
    bgGradient="linear(to-l, #1228AC, #F35FFD)"
    {...props}
  />
)
