import getHeroesHeroByPublisher from '../helpers/getHeroesHeroByPublisher';
import HeroCard from './HeroCard';
import { useMemo as reactUseMemo } from 'react';

interface Hero {
  id: string;
  superhero: string;
  publisher: string;
  alter_ego: string;
  first_appearance: string;
  characters: string;
  [key: string]: string;
}

interface HeroListProps {
  publisher: string;
}

const HeroList: React.FC<HeroListProps> = ({publisher}) => {

  const heroes: Hero[] = useMemo(() => getHeroesHeroByPublisher(publisher), [publisher]);
  return (
    <div className ="row rows-cols-1 row-cols-md-3 g-3">
       {
        heroes.map((hero: Hero) => (
          <li key={hero.id}>
            <HeroCard key={hero.id} {...hero} />
          </li>
        ))
       } 
    </div>
  )
}

export default HeroList
function useMemo<T>(factory: () => T, deps: React.DependencyList): T {
  return reactUseMemo(factory, deps);
}

