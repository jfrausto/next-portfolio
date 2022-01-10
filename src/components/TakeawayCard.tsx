import React from 'react';
import {Flex, Icon, Text} from '@chakra-ui/react';

interface TakeawayCardProps {
  icon: any,
  cardText: string,
}

const TakeawayCard: React.FC<TakeawayCardProps> = ({icon, cardText}) => {
  return (
    <>
      <Flex
        flexDirection="column"
        flexWrap="nowrap"
        justifyContent="space-around"
        alignItems="center"

        height={[72,80,80,80]}
        // h={80}
        // w={64}
        // height={80}
        width={[60,64,64,64]}
        // width={64}
        // bg="blue.100"
        m={3}
        p={4}
        // py={8}
        // bg={"gray.700"}
        bg={"radial-gradient(circle at 50% 32%, rgba(208,138,138,0.38) 0%, rgba(56,67,100,0.40) 45%), radial-gradient(circle at 50% 75%, rgba(68,79,185,0.85) 0%, rgba(49,60,90,0.40) 50%)"}
        borderRadius={"2xl"}
      >
        {/* large icon */}
        <Icon
          as={icon}
          // position={"relative"}
          // top={3}
          // pb={-4}
          m={2}
          mt={3}
          w={[20, 24, 24, 24]}
          h={[20, 24, 24, 24]}
        />
        {/* some text here: key point */}
        <Text
          // maxWidth={["70vw", "50vw", "20vw", "16vw"]}
          fontSize={["17px", "17px", "18px", "18px"]}

          // fontSize="16px"
          // mt={1}
          // pt={2}
          textAlign="center"
        >
          {cardText}
        </Text>
      </Flex>
    </>
  )
}

export default TakeawayCard;
