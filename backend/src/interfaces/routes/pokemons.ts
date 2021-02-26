export interface IPokemonsRequest {
  limit?: number;
  offset?: number;
  name?: string;
  type?: string;
}

export interface IPokemonsResponse {
  total: number;
  count: number;
  offset: number;
  limit: number;
  pokemons: IPokemon[];
}

interface IPokemon {
  name_clean: string;
  abilities: string[];
  stats: IStats;
  types: string[];
  img: string;
  name: string;
  base_experience: number;
  height: number;
  id: number;
  is_default: boolean;
  order: number;
  weight: number;
}

interface IStats {
  hp: number;
  attack: number;
  defense: number;
  "special-attack": number;
  "special-defense": number;
  speed: number;
}
