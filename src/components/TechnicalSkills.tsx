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
        alignItems="center"
        minH="460px"
      >
        <Heading 
          textAlign={["center", "center", "left", "left"]}
          textDecoration="italic" as="h3" size="sm"
        >
          Skills
        </Heading>
        <Grid templateColumns="repeat(2, 1fr)" 
          columnGap={["4", "6", "8", "12"]}
          p={2} 
        >
          {
            techSkills.map( (skill) => {
              return (<Flex 
                w="100%" 
                direction="column" 
                justifyContent="center" 
                alignItems="flex-start"
                pl={3} 
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
