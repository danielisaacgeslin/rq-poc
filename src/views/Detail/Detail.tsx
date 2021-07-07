import { useCallback } from 'react';
import { useQuery } from 'react-query';

import { ApiService } from '../../services/ApiService';

export interface Props {
  location: { pathname: string };
}

export const Detail = ({ location }: Props) => {
  const code = location?.pathname?.split('/').pop();
  const query = useCallback(() => ApiService.getCountryByCode(code), [code]);
  const { data, isLoading } = useQuery('country', query);
  return <div>
    {isLoading && <p>loading...</p>}
    {JSON.stringify(data)};
  </div>;
};
