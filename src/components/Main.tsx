import { Flex, FlexProps } from '@chakra-ui/react'

export const Main = (props: FlexProps) => (
  <Flex
  direction="column"
  alignItems="center"
  justifyContent="flex-start"
  p={4}
    {...props}
  />
)
