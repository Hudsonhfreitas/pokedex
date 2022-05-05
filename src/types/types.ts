export type PokemonResult = {
  name: string;
  url: string;
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

export type PokemonInfo = {
  id: number;
  name: string;
  image: string;
  type: string;
};

export type Stats = {
  name: string;
  value: number;
};

export interface Name {
  name: string;
}

export interface Type {
  type: Name;
}

export interface Ability {
  ability: Name;
}

export interface BaseStatus {
  stat: Name;
  base_stat: number;
}
