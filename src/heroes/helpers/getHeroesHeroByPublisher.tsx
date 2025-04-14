import { heroes } from "../data/heroes";

export const getHeroesHeroByPublisher = ( publisher: string ) => {
        const validatedPublishers = ['DC Comics', 'Marvel Comics'];
        if ( !validatedPublishers.includes( publisher ) ) {
            throw new Error(`Publisher ${ publisher } es un publisher no válido`);
        } 
        return heroes.filter( hero => hero.publisher === publisher );
    }

export default getHeroesHeroByPublisher
