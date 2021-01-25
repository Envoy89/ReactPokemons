import React, { useState } from 'react';
import useData from '../../hooks/getData';

const PokedexPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState({});

  const { data, isLoading, isError } = useData('getPokemons', query, [searchValue]);

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
        <ul>{data && data.pokemons.map((item) => <li key={item.name}>{item.name}</li>)}</ul>
      </div>
    </div>
  );
};

export default PokedexPage;
