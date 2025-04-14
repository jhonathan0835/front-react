
interface HeroCardProps {
  id: string;
  superhero: string;
  publisher: string;
  alter_ego: string;
  first_appearance: string;
  characters: string;
}

import { Link } from 'react-router-dom';

const HeroCard: React.FC<HeroCardProps> = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {

    const heroImageUrl = `public/assets/${id}.jpg`;

  return (
    <div className="col">
        <div className="card">
            <div className="row no-gutters">
                <div className="col-4">
                    <img src={heroImageUrl} className="card-img" alt={superhero}
                     />
                </div>

                <div className="card-body">
                    <h5 className="card-title">
                        {superhero}
                    </h5>
                    <p className="card-text">alter_ego</p>
                    
                    {
                      (alter_ego !== characters) && (<p>{characters}</p>)
                    }
                    <p className="card-text">
                      <small className="text-muted">{publisher}</small>
                      <small className="text-muted">{first_appearance}</small>
                      <br />
                      <Link to={`/hero/${id}`}>
                        mas...
                      </Link>
                    </p>

                </div>
            </div>

        </div>
      
    </div>
  );
};

export default HeroCard;
