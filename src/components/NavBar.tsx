import React from 'react';
import { Flex, Stack, Box } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { IconButton } from '@chakra-ui/button';
import { FaMale, FaLaptopCode, FaMailBulk } from 'react-icons/fa';


const NavBar: React.FC = () => {
  return (
    <>
      <Stack
        // p={1}
        // py={[1, 2, 10, 12]}
        // px={[12, 10, 2, 2]}
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
              aria-label="work"
              icon={<FaLaptopCode/>}
            />
          </Box>
        </Flex>
        <Flex>
          <Box>
            <IconButton 
              aria-label="contact"
              icon={<FaMailBulk/>}
            />
          </Box>
        </Flex>
      </Stack>
    </>
  )
}

export default NavBar
