import React, { useState } from 'react';
import useData from '../../hooks/getData';
import useDebounce from '../../hooks/useDebounce';
import { IPokemons, IPokemon } from '../../interface/pokedex';

interface IQuery {
  limit: number;
  name?: string;
}

const PokedexPage = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [query, setQuery] = useState<IQuery>({
    limit: 12,
  });
  const debouncedValue = useDebounce(searchValue, 500);

  const { data, isLoading, isError } = useData<IPokemons>('getPokemons', query, [debouncedValue]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setQuery((s) => ({
      ...s,
      name: e.target.value,
    }));
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error!!!</div>;
  }

  return (
    <div>
      <div>
        <input type="text" value={searchValue} onChange={handleOnChange} />
      </div>
      <div>Pokedex!!! {data && data.total}</div>
      <div>
        <ul>{data && data.pokemons.map((item: IPokemon) => <li key={item.name}>{item.name}</li>)}</ul>
      </div>
    </div>
  );
};

export default PokedexPage;
