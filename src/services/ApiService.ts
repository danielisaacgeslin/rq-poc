import { ICountry } from '../models/country';

export abstract class ApiService {
  static request = <T = any>(input: RequestInfo, init?: RequestInit) => fetch(input, init).then(r => r.json() as unknown as T);

  static getAllCountries = () => {
    return ApiService.request<ICountry[]>('https://restcountries.eu/rest/v2/all');
  };

  static getCountryByCode = (code: string) => {
    return ApiService.request<ICountry>(`https://restcountries.eu/rest/v2/alpha/${code}`);
  };
}
