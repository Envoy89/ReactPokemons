import React, { useState } from 'react';
import useData from '../../hooks/getData';
import useDebounce from '../../hooks/useDebounce';
import { IPokemons, IPokemon } from '../../interface/pokedex';
import PokemonCard from '../../components/PokemonCard';

import s from './Pokedex.module.scss';

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
    setQuery((elem) => ({
      ...elem,
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
    <div className={s.root}>
      <div className={s.title}>800 Pokemons for you to choose your favorite</div>
      <input
        className={s.searchInput}
        type="text"
        value={searchValue}
        onChange={handleOnChange}
        placeholder="Encuentra tu pokémon..."
      />
      <div className={s.content}>
        <div className={s.pokemons}>
          {data &&
            data.pokemons.map((item: IPokemon) => (
              <div className={s.pokemon}>
                <PokemonCard
                  name={item.name}
                  attack={item.stats.attack}
                  defense={item.stats.defense}
                  img={item.img}
                  types={item.types}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default PokedexPage;
