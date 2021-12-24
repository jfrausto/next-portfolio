import React from 'react';
import {Flex, Heading, Grid, UnorderedList, ListItem } from '@chakra-ui/react'

const TechnicalSkills = () => {

  const techSkills: string[] = [
    "JavaScript", "TypeScript", "React", "Next.js",
    "HTML", "CSS", "Framer Motion",
    "Webpack", "Express", "MongoDB",
    "Socket.io", "JQuery", "MySQL",
    "Bootstrap", "MAterialize", "Chakra UI",
    "Firebase"
  ];

  return (
    <>
      <Flex 
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        minH="560px"
        pl={[1, 2 ,3, 4]}
        
      >
        <Heading 
          size="lg"
          mb={4}
        >
          experience with
        </Heading>
        <Grid templateColumns="repeat(2, 1fr)" 
          columnGap={["4", "6", "32", "32"]}
          rowGap={[4,4,4,4]}
          p={1} 
        >
          {
            techSkills.map( (skill) => {
              return (<Flex 
                w="100%" 
                direction="column" 
                justifyContent="center" 
                alignItems="flex-start"
                pl={[0, 3,3,3]} 
                h="10"
                key={skill}
              >
                <UnorderedList>
                  <ListItem>
                    {skill}
                  </ListItem>
                </UnorderedList>
              </Flex>)
            }
            )
          }
        </Grid>
      </Flex>
    </>
  )
}

export default TechnicalSkills
