import React from 'react'
import getHeroesHeroByPublisher from '../helpers/getHeroesHeroByPublisher';

interface Hero {
  id: string;
  superhero: string;
  [key: string]: string;
}

interface HeroListProps {
  publisher: string;
}

const HeroList: React.FC<HeroListProps> = ({publisher}) => {

  const heroes: Hero[] = getHeroesHeroByPublisher(publisher);
  return (
    <ul>
       {
        heroes.map((hero: Hero) => (
          <li key={hero.id}>
            {hero.superhero}
          </li>
        ))
       } 
    </ul>
  )
}

export default HeroList
