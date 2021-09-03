import React from 'react';
import {
  Text,
  Center,
  Box,
  Stack,
  VStack,
  Image as ChakraImage,
  Heading,
  Wrap,
  WrapItem
} from '@chakra-ui/react';
import { FaHome, FaTv, FaItunesNote, FaPizzaSlice, FaSeedling, FaFire } from "react-icons/fa";
import AboutMeTags from '../components/AboutMeTags';
import QuickFacts from '../components/QuickFacts';
// import Jesse from '../components/images/jesse_shopped_cropped.jpg';
import Image from 'next/image';



const Index: React.FC = () => (
  <>
     <Stack
        direction={["column", "column", "row", "row"]}
        justifyContent="center"
        justifyItems="center"
        p={2}
        marginX="auto"
      >
        <Center>
          <Box
          >
              <ChakraImage
                // src={Jesse}
                src='/static/images/jesse_shopped_cropped.jpg'
                // objectFit="contain"
                borderRadius="full"
                // height="100px"
                // width="100px"
                // objectPosition="50% 50%"
                // layout="intrinsic"
                alt="it's me!"
                />
          </Box>
        </Center>
        <VStack 
          justifyContent="center"
          pl={2}
        >
          <Box
            maxW="60ch"
          >
                  <Heading textDecoration="underline crimson" pb={2} textAlign={["center", "center", "left", "left"]}>
                    Nice to meet you!
                  </Heading>

                  <Heading 
                    mb={3}
                    textAlign={["center", "center", "left", "left"]}
                    textDecoration="italic" as="h3" size="sm"
                  >
                    -- Technical Skills --
                  </Heading>

                  <AboutMeTags />

                  <Heading 
                    mt={3}
                    mb={1}
                    textAlign={["center", "center", "left", "left"]}
                    textDecoration="italic" as="h3" size="sm"
                  >
                    -- Quick Facts --
                  </Heading>
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
                    <WrapItem>
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
                    </WrapItem>
                  </Wrap>
            </Box>
        </VStack>
      </Stack>
  </>
)

export default Index
