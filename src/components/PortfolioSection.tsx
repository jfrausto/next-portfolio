import React from 'react';
import { Wrap, WrapItem } from '@chakra-ui/layout';
import PortfolioCard from './PortfolioCard';
import { 
  vibeeTags, 
  pubCrawlTags, 
  learnSquadTags, 
  burgerTags, 
  budgetTrackTags,
  cryptickTags
} from './ProjectTags';
// import CustomScroller from 'react-custom-scroller';

const PortfolioSection: React.FC = () => {

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
      
      <Wrap 
        spacing="30px" 
        align="center" 
        justify="center" 
        // maxW="1000px"
      >
          <WrapItem>
            <PortfolioCard 
              project="Vibee"
              video={"/static/videos/Vibee_TAB_demo.mp4"} 
              prod="https://evening-sands-41595.herokuapp.com/"
              code="https://github.com/jfrausto/FindYourVibe"
              tags={vibeeTags}
              desc={description.vibee}
            />
          </WrapItem>
          <WrapItem>
            <PortfolioCard
              project="Pub Crawl"
              video={"/static/videos/Pub_Crawl_Gen_TAB_demo.mp4"}
              prod="https://willrodgers7.github.io/Ultimate-Pub-Crawl/"
              code="https://github.com/WillRodgers7/Ultimate-Pub-Crawl"
              tags={pubCrawlTags}
              desc={description.pubCrawl}
            />
          </WrapItem>
          <WrapItem>
            <PortfolioCard 
              project="Learning Squads"
              video={"/static/videos/Learn_Squad_TAB_demo.mp4"}
              prod="https://learn-squad.herokuapp.com/"
              code="https://github.com/shadysaleh01/Learn-Squad"
              tags={learnSquadTags}
              desc={description.learningSquad}
            />
          </WrapItem>
          <WrapItem>
            <PortfolioCard 
              project="Burger DB"
              video={"/static/videos/Burger_DB_TAB_demo.mp4"}
              prod="https://gentle-oasis-33918.herokuapp.com/"
              code="https://github.com/jfrausto/out-n-in-burger"
              tags={burgerTags}
              desc={description.burgerDB}
            />
          </WrapItem>
          <WrapItem>
            <PortfolioCard 
              project="Budget Tracker"
              video={"/static/videos/Budeget_Tracker_TAB_demo.mp4"}
              prod="https://rocky-garden-31416.herokuapp.com/"
              code="https://github.com/jfrausto/Budget-Tracker"
              tags={budgetTrackTags}
              desc={description.budgetTracker}
            />
          </WrapItem>
          <WrapItem>
            <PortfolioCard 
              project="Cryptick"
              video={"/static/videos/Cryptick.mp4"}
              prod="https://cryptick.vercel.app/"
              code="https://github.com/jfrausto/cryptick"
              tags={cryptickTags}
              desc={description.cryptick}
            />
          </WrapItem>
        </Wrap>
    </>
  )
}

export default PortfolioSection
