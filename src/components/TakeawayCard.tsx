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
        flexWrap="wrap"
        justifyContent="space-around"
        alignItems="center"

        // height
        width={48}
        // bg="blue.100"
        m={3}
      >
        {/* large icon */}
        <Icon
          as={icon}
          w={[24, 20, 20, 24]}
          h={[24, 20, 20, 24]}
        />
        {/* some text here: key point */}
        <Text
          maxWidth={["70vw", "40vw", "20vw", "16vw"]}
          fontSize={["14px", "15px", "16px", "16px"]}
          // fontSize="14px"
          pt={3}
          textAlign="center"
        >
          {cardText}
        </Text>
      </Flex>
    </>
  )
}

export default TakeawayCard;
