import { Flex, Heading } from '@chakra-ui/react'

export const Hero = ({ title }: { title: string }) => (
  <Flex
    justifyContent="center"
    alignItems="center"
    height="100vh"
    bgGradient="linear(to-l, #7928CA, #FF0080)"
    bgClip="text"
  >
    <Heading fontSize="4xl" textAlign="center">{title}</Heading>
  </Flex>
)

Hero.defaultProps = {
  title: 'Hi, my name is jesse frausto. I\'m a full-stack web developer.',
}
