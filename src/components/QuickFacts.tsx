import React from 'react';
import { Flex, Box, Text, Icon, useColorMode } from '@chakra-ui/react';

interface QuickFactsProps {
  icon: any,
  heading: string,
  snippet: string
}


const QuickFacts: React.FC<QuickFactsProps> = ({icon, heading, snippet}) => {

  const {colorMode} = useColorMode();
  const brandColors = {
    light: "brand.500",
    dark: "brand.300"
  };


  return (
    <>
      {/* <Flex mt={1} mr={1}>
        <Icon as={icon} w={8} h={8} mt={2} color={brandColors[colorMode]} />
        <Box ml="3" textAlign="left">
          <Text fontWeight="bold" fontSize="sm">
            {heading}
          </Text>
          <Text fontSize="xs">
            {snippet}
          </Text>
        </Box>
      </Flex> */}
      <Flex
        direction={"row"}
        justifyContent={"flex-start"}
        alignItems={"center"}
      >
        <Icon as={icon} w={6} h={6} mt={2} />
        <Flex
          ml={3}
          direction={"column"}
          justifyContent={"space-evenly"}
          alignItems={"flex-start"}
        >
          <Text
            fontWeight={"bold"}
            fontSize={["sm", "md", "md", "md"]}
          >
            {heading}
          </Text>

          <Text
            fontSize={["xs", "sm", "sm", "sm"]}
          >
            {snippet}
          </Text>

        </Flex>

      </Flex>
    </>
  )
}

export default QuickFacts
