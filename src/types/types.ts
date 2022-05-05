export type PokemonResult = {
  name: string;
  url: string;
};

export type Stats = {
  name: string;
  value: number;
};

export type PokemonDetails = {
  id: number;
  name: string;
  image: string;
  types: Array<string>;
  abilities: Array<string>;
  height: number;
  weight: number;
  weaknesses: Array<string>;
  stats: Stats[];
};
