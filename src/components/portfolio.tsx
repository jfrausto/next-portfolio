import React from 'react';
import {
  Box,
  Flex,
  useColorMode,
  Heading,
} from '@chakra-ui/react';
import { Container } from './Container';
import PortfolioSection from './PortfolioSection';
import SimpleBar from 'simplebar-react';
import ProjectCard from './ProjectCard';
import { 
  vibeeTags, 
  pubCrawlTags, 
  learnSquadTags, 
  burgerTags, 
  budgetTrackTags,
  cryptickTags
} from './ProjectTools';


const Portfolio: React.FC = () => {

  // const {colorMode} = useColorMode();

  // const portColors = {
  //   light: "brand.900",
  //   dark: "brand.100"
  // }
  const description = {
    vibee: "a social media app that allows you to analyze your words and choose from songs that could match your mood. Post your mood, song, and words for interesting combinations so the world can see!",
    pubCrawl: "an application that plans a night out for you! Just choose your city and a list of bars, pubs, and restaurants will display with a map on how to get to each one. Allows customization of the type of establishments you would like to visit.",
    learningSquad: "a fast paced trivia game. Pick a squad, and take a quiz from 6 different categories. Earn enough cash, and you will be able to mark your territory on a map in the name of your squad!",
    burgerDB: "an application where you can create a burger, put it on an eating list. You then devour it putting it on the 'In' list. Showcases SQL executions.",
    budgetTracker: "a simple, useful budget tracking application. Input your withdrawals and deposits to watch your wealth fluctuate with a graph",
    cryptick: "a minimalistic price ticker for crypto currencies. Quickly check current and recent info of your favorite cryptos"
  };

  return (
    <>
      <Container
        id="work"
        // bg="#C0C0C0"
        // bg="red.900"
        // boxShadow="0 0 10px"
      >
        <Box as={Heading} 
          size="3xl"
          marginBottom="4rem" 
          // textDecoration="underline crimson"
          // color={portColors[colorMode]}
          paddingTop={1}
          >
          Projects
        </Box>
        <Flex
          // maxH="80vh"
          maxW="1600px"
          alignItems="center"
          justifyContent="center"
          wrap={"wrap"}
          // bg="red.800"
          // bg="#EDF2F7"
          // borderRadius="7%"
          // boxShadow="inset 10px 3px 5px 5px #000000"
        >
            <ProjectCard 
              project="Vibee"
              video={"/static/videos/Vibee_TAB_demo.mp4"} 
              prod="https://evening-sands-41595.herokuapp.com/"
              code="https://github.com/jfrausto/FindYourVibe"
              tags={vibeeTags}
              desc={description.vibee}
            />
            <ProjectCard 
              project="Pub Crawl"
              video={"/static/videos/Pub_Crawl_Gen_TAB_demo.mp4"}
              prod="https://willrodgers7.github.io/Ultimate-Pub-Crawl/"
              code="https://github.com/WillRodgers7/Ultimate-Pub-Crawl"
              tags={pubCrawlTags}
              desc={description.pubCrawl}
            />
            <ProjectCard 
              project="Learning Squads"
              video={"/static/videos/Learn_Squad_TAB_demo.mp4"}
              prod="https://learn-squad.herokuapp.com/"
              code="https://github.com/shadysaleh01/Learn-Squad"
              tags={learnSquadTags}
              desc={description.learningSquad}
            />
            <ProjectCard 
              project="Burger DB"
              video={"/static/videos/Burger_DB_TAB_demo.mp4"}
              prod="https://gentle-oasis-33918.herokuapp.com/"
              code="https://github.com/jfrausto/out-n-in-burger"
              tags={burgerTags}
              desc={description.burgerDB}
            />
            <ProjectCard 
              project="Budget Tracker"
              video={"/static/videos/Budeget_Tracker_TAB_demo.mp4"}
              prod="https://rocky-garden-31416.herokuapp.com/"
              code="https://github.com/jfrausto/Budget-Tracker"
              tags={budgetTrackTags}
              desc={description.budgetTracker}
            />
            <ProjectCard 
              project="Cryptick"
              video={"/static/videos/Cryptick.mp4"}
              prod="https://cryptick.vercel.app/"
              code="https://github.com/jfrausto/cryptick"
              tags={cryptickTags}
              desc={description.cryptick}
            />
          {/* <SimpleBar 
            style={{  
              maxHeight: "67vh", 
              minWidth: "73vw", 
              overflowX: "hidden",
              backgroundColor: "#2D3748",
              borderRadius: "7px",
              // boxShadow: "inset 0 0 10px",
              padding: "5px"
              // scrollMarginRight: "10px"
            }}
          >
          <PortfolioSection/>
          </SimpleBar>   */}

        </Flex>
      </Container>
  </>
  )
}

export default Portfolio;
