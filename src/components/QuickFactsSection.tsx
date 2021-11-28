import React from 'react';
import { FaHome, FaTv, FaItunesNote, FaPizzaSlice, FaSeedling, FaFire } from "react-icons/fa";
import { Wrap, WrapItem } from '@chakra-ui/react';
import QuickFacts from './QuickFacts';

const QuickFactsSection: React.FC = () => {
  return (
    <>
      <Wrap spacing="15px" align="center">
        <WrapItem>
          <QuickFacts 
            icon={FaHome}
            heading={"Hometown"}
            snippet={"East Los Angeles, CA"}
          />
        </WrapItem>
        <WrapItem>
          <QuickFacts 
            icon={FaSeedling}
            heading={"Currently Learning"}
            snippet={"PHP, Kotlin, TypeScript"}
          />
        </WrapItem>
        <WrapItem>
          <QuickFacts 
            icon={FaItunesNote}
            heading={"Music"}
            snippet={"Funk, Psych, R&B"}
          />
        </WrapItem>
        <WrapItem>
          <QuickFacts 
            icon={FaFire}
            heading={"Current Interests"}
            snippet={"Cryptos, Music Production"}
          />
        </WrapItem>
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
      </Wrap>
    </>
  )
}

export default QuickFactsSection
