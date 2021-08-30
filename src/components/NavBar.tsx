import React from 'react';
import { Flex, Stack, Box } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { useRouter } from 'next/router'
import { IconButton } from '@chakra-ui/button';
import { FaMale, FaLaptopCode, FaMailBulk } from 'react-icons/fa';


const NavBar: React.FC = () => {

  const router = useRouter();

  return (
    <>
      <Stack
        direction={["row", "row", "column", "column"]}
        bg="blue.700"
        spacing={16}
      >
        <Flex>
          <Box>
            <IconButton 
              aria-label="about"
              icon={<FaMale/>}
              onClick={ (e) => {
                e.preventDefault()
                router.push("/", "about", {scroll: false})
              }}
            />
          </Box>
        </Flex>
        <Flex>
          <Box>
          <IconButton 
              aria-label="work"
              icon={<FaLaptopCode/>}
              onClick={ (e) => {
                e.preventDefault()
                router.push("/portfolio", "portfolio", {scroll: false})
              }}
            />
          </Box>
        </Flex>
        <Flex>
          <Box>
            <IconButton 
              aria-label="contact"
              icon={<FaMailBulk/>}
              onClick={ (e) => {
                e.preventDefault()
                router.push("/contact", "contact", {scroll: false})
              }}
            />
          </Box>
        </Flex>
      </Stack>
    </>
  )
}

export default NavBar
