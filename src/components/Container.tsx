import { Flex, useColorMode, FlexProps } from '@chakra-ui/react'

export const Container = (props: FlexProps) => {
  const { colorMode } = useColorMode()

  const bgColor = { light: 'gray.50', dark: 'gray.900' }

  const color = { light: 'black', dark: 'white' }
  return (
    <Flex
      minHeight="100vh"
      direction="column"
      alignItems="center"
      justifyContent="center"
      // justifyContent="center"
      // bg={bgColor[colorMode]}
      color={color[colorMode]}
      // bg="gray.900"
      // bg="#080808"
      bg="#0C0C0C"
      {...props}
    />
  )
}
