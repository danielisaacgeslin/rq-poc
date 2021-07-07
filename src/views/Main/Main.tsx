import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

import { ApiService } from '../../services/ApiService';

export const Main = () => {
  const { data = [], isLoading } = useQuery('countries', ApiService.getAllCountries);

  return (
    <div>
      <h2>country list</h2>
      {isLoading && <p>loading...</p>}
      {data.map(country => (
        <Link key={country.alpha3Code} to={`/detail/${country.alpha3Code}`}>
          <p>{country.name}</p>
        </Link>
      ))}
    </div>
  );
};
