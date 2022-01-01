import { Flex, Heading } from '@chakra-ui/react'

export const Hero = ({ title }: { title: string }) => (
  <Flex
    justifyContent="center"
    alignItems="center"
    height="100vh"
    bgGradient="radial-gradient(circle, rgba(238,174,174,1) 0%, rgba(148,187,233,1) 100%)"
    // bg="linear-gradient(#e66465, #9198e5)"

    bgClip="text"
    // maxW="70vw"
    maxW={["70vw", "50vw", "60vw", "50vw"]}
  >
    <Heading fontSize={["5xl", "6xl", "8xl", "8xl"]} textAlign={["center", "center", "center", "center"]}>{title}</Heading>
  </Flex>
)

Hero.defaultProps = {
  title: 'Jesse Frausto. \nFull-Stack Web Developer.',
}
