import React from 'react';
import useData from '../../hooks/getData';
import { IPokemon } from '../../interface/pokedex';

export interface PokemonProps {
  id: string | number;
}

const Pokemon: React.FC<PokemonProps> = ({ id }) => {
  const { data, isLoading } = useData<IPokemon>('getPokemon', { id: 25 });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <div>{data?.name}</div>;
};

export default Pokemon;
