import React from 'react';
import { Flex, Stack, Box } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { IconButton } from '@chakra-ui/button';
import { FaMale, FaLaptopCode, FaMailBulk } from 'react-icons/fa';


const NavBar: React.FC = () => {
  return (
    <>
      <Stack
        p={1}
        direction={["row", "row", "column", "column"]}
        bg="blue.700"
        spacing={16}
      >
        <Flex>
          <Box>
            <IconButton 
              aria-label="about"
              icon={<FaMale/>}
            />
          </Box>
        </Flex>
        <Flex>
          <Box>
          <IconButton 
              aria-label="about"
              icon={<FaLaptopCode/>}
            />
          </Box>
        </Flex>
        <Flex>
          <Box>
            <IconButton 
              aria-label="about"
              icon={<FaMailBulk/>}
            />
          </Box>
        </Flex>
      </Stack>
    </>
  )
}

export default NavBar
