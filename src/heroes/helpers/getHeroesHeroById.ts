import { heroes } from "../data/heroes";

export const getHeroesById = (id:string|undefined) => {      

    return heroes.find(hero => hero.id === id);


}

export default getHeroesById