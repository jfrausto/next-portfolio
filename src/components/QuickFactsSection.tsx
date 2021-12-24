import React from 'react';
import { FaHome, FaTv, FaItunesNote, FaPizzaSlice, FaSeedling, FaFire } from "react-icons/fa";
import { Wrap, WrapItem, Flex, Grid } from '@chakra-ui/react';
import QuickFacts from './QuickFacts';

const QuickFactsSection: React.FC = () => {
  return (
    <>
      {/* rework this structure */}
      {/* <Flex
        borderRadius="md"
        bg="gray.700"
        p={3}
        m={2}
        maxW="420px"
      >
        <Wrap spacing="15px" align="center">
          <WrapItem>
            <QuickFacts 
              icon={FaHome}
              heading={"Hometown"}
              snippet={"East Los Angeles, CA"}
            />
          </WrapItem> */}
          {/* <WrapItem>
            <QuickFacts 
              icon={FaSeedling}
              heading={"Currently Learning"}
              snippet={"PHP, Kotlin, TypeScript"}
            />
          </WrapItem> */}
          {/* <WrapItem>
            <QuickFacts 
              icon={FaItunesNote}
              heading={"Music"}
              snippet={"Funk, Psych, R&B"}
            />
          </WrapItem> */}
          {/* <WrapItem>
            <QuickFacts 
              icon={FaFire}
              heading={"Current Interests"}
              snippet={"Cryptos, Music Production"}
            />
          </WrapItem> */}
          {/* <WrapItem>
            <QuickFacts 
              icon={FaTv}
              heading={"Now Watching"}
              snippet={"Archer, Beserk"}
            />
          </WrapItem>
          <WrapItem>
            <QuickFacts 
              icon={FaPizzaSlice}
              heading={"Favorite Cuisines"}
              snippet={"Korean, Mexican, Japanese"}
            />
          </WrapItem> */}
        {/* </Wrap>
      </Flex> */}

      <Grid
        bg={"gray.700"}
        borderRadius={"md"}
        p={[1, 3, 3, 4]}
        px={[2, 4, 8, 8]}
        // templateColumns={"180px 190px"}
        templateColumns={["162px 172px", "180px 190px", "200px 210x", "200px 210x"]}
        templateRows={"65px 65px"}
        columnGap={["0px", "5px", "30px", "30px"]}
        rowGap={"5px"}
      >
        <QuickFacts 
          icon={FaHome}
          heading={"Hometown"}
          snippet={"East Los Angeles, CA"}
        />
        <QuickFacts 
          icon={FaSeedling}
          heading={"Currently Learning"}
          snippet={"PHP, Kotlin, TypeScript"}
        />
        <QuickFacts 
          icon={FaItunesNote}
          heading={"Music"}
          snippet={"Funk, Psych, R&B"}
        />
        <QuickFacts 
          icon={FaFire}
          heading={"Current Interests"}
          snippet={"Cryptos, Music Production"}
        />
      </Grid>




    </>
  )
}

export default QuickFactsSection
