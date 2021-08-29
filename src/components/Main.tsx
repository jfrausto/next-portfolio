import { Flex, FlexProps } from '@chakra-ui/react'

export const Main = (props: FlexProps) => (
  <Flex
    direction="column"
    alignItems="center"
    justifyContent="center"
    p={4}
    minH="90vh"
    minW="75vw"
    bgGradient="linear(to-l, #1228AC, #F35FFD)"
    {...props}
  />
)
