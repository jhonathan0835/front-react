import { Navigate, useParams } from "react-router-dom"
import getHeroesById from "../helpers/getHeroesHeroById";

const HeroPage = () => {

  const { id } = useParams();
  const hero = getHeroesById(id);

  if (!id) {
    return <Navigate to="/marvel" />;
  }
  
  if (!hero) {
    return <Navigate to="/marvel" />;
  }
  console.log(id);
  return (
      <h1>{hero.superhero}</h1>
  )
}

export default HeroPage
