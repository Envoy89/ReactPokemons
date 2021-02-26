import React from 'react';
import useData from '../../../hooks/getData';
import Filter, { IFilterValue } from '../../../components/Filter';

interface PokemonTypeFilterProps {
  handleChange: (value: string) => void;
}

const PokemonTypeFilter: React.FC<PokemonTypeFilterProps> = ({ handleChange }) => {
  const { data, isLoading, isError } = useData<IFilterValue[]>('getPokemonTypes', {}, []);

  if (isError || !data) {
    return null;
  }

  const returnValue = isLoading ? <div>loading</div> : <Filter handleChange={handleChange} data={data} />;

  return returnValue;
};

export default PokemonTypeFilter;
