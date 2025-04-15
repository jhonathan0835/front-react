import { Navigate, useNavigate, useParams } from "react-router-dom"
import getHeroesById from "../helpers/getHeroesHeroById";
import { useMemo as reactUseMemo } from "react";

const HeroPage = () => {

  const { id } = useParams();
  const hero = useMemo(() => getHeroesById(id), [id]);
  const navigate = useNavigate();

  const onNavigateBack = () => {
     navigate(-1);
  }
  if (!id) {
    return <Navigate to="/marvel" />;
  }
  
  if (!hero) {
    return <Navigate to="/marvel" />;
  }
  console.log(id);
  return (
    <div className="row mt-5">
      <div className="col-4">
        <img 
        src={ `/public/assets/${id}.jpg`}
        alt={hero.superhero} 
        className="img-thumbnail animate__animated animate__fadeInLeft" />
      </div>
      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><b>Alter ego:</b>{hero.alter_ego}</li>
          <li className="list-group-item"><b>publisher:</b>{hero.publisher}</li>
          <li className="list-group-item"><b>first_appearance:</b>{hero.first_appearance}</li>

          <h5 className="mt-3">characters </h5>
          <p>{hero.characters}</p>
          <button
            className="btn btn-outline-primary"
            onClick={onNavigateBack}> Volver </button>      

        </ul>
      </div>

    </div>  
  )
}

export default HeroPage
function useMemo<T>(factory: () => T, deps: React.DependencyList): T {
  return reactUseMemo(factory, deps);
}

