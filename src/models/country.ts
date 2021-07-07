export interface ICurrency {
  code: string;
  name: string;
  symbol: string;
}

export type ILanguaje = any;
export type IRegionalBlock = any;

export interface ICountry {
  alpha2Code: string;
  alpha3Code: string;
  altSpellings: string[];
  area: number;
  borders: string[];
  callingCodes: string[];
  capital: string;
  cioc: string;
  currencies: ICurrency[];
  demonym: string;
  flag: string;
  gini: number;
  languages: ILanguaje[];
  latlng: [number, number];
  name: string;
  nativeName: string;
  numericCode: string;
  population: number;
  region: string;
  regionalBlocs: IRegionalBlock[];
  subregion: string;
  timezones: string[];
  topLevelDomain: string[];
  translations: Record<string, string>;
}
