import queryString from 'query-string';
import { useNavigate, useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../helpers/getHeroesByName';
import HeroCard from '../components/HeroCard';

const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { q } = queryString.parse(location.search);
  const heroes = getHeroesByName(typeof q === 'string' ? q : undefined);

  const { formState, onInputChange } = useForm({
    searchText: typeof q === 'string' ? q : '',
  });

  const { searchText } = formState;

  const onSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchText.trim().length <= 1) return;
    navigate(`?q=${searchText}`);
  };

  // Removed duplicate declaration of onInputChange

  return (
    <>
      <h1>Search Page</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Search hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <br />
            <button className="btn btn-outline-primary mt-1" type="submit">
              Search
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {
            (q === '')
            ? <div className='alert alert-primary'>Search Hero</div>
            :(heroes.length === 0) && <div className='alert alert-danger'>No hero with <b>{q}</b></div> 
          }
          
        </div>
        {
          heroes.map((hero) => (
            <div className="col-4 mt-3" key={hero.id}>
              <HeroCard {...hero} />
            </div>
          ))}
        
      </div>
    </>
  );
};

export default SearchPage;
