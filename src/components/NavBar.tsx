import React from 'react';
import { Flex, Stack, Box } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';

const NavBar: React.FC = () => {
  return (
    <>
      <Stack
        p={1}
        direction={["row", "row", "column", "column"]}
      >
        <Flex>
          <Box>
            <Button>
              Hey
            </Button>
          </Box>
        </Flex>
        <Flex>
          <Box>
            <Button>
              Hey
            </Button>
          </Box>
        </Flex>
        <Flex>
          <Box>
            <Button>
              Hey
            </Button>
          </Box>
        </Flex>
      </Stack>
    </>
  )
}

export default NavBar
