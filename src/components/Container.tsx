import { Flex, useColorMode, FlexProps } from '@chakra-ui/react'

export const Container = (props: FlexProps) => {
  const { colorMode } = useColorMode()

  const bgColor = { light: 'gray.50', dark: 'gray.900' }

  const color = { light: 'black', dark: 'white' }
  return (
    <Flex
      height="100vh"
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      // justifyContent="center"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      {...props}
    />
  )
}
