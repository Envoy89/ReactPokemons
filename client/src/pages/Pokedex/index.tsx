import React, { useState } from 'react';
import useData from '../../hooks/getData';
import useDebounce from '../../hooks/useDebounce';
import { IPokemons, IPokemon } from '../../interface/pokedex';
import PokemonCard from '../../components/PokemonCard';

import s from './Pokedex.module.scss';
import PokemonTypeFilter from './PokemonTypeFilter';

interface IQuery {
  limit: number;
  name?: string;
  type?: string;
}

const PokedexPage = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [pokemonType, setPokemonType] = useState<string>('');
  const [query, setQuery] = useState<IQuery>({
    limit: 12,
  });
  const debouncedValue = useDebounce<string>(searchValue, 500);

  const { data, isLoading, isError } = useData<IPokemons>('getPokemons', query, [debouncedValue, pokemonType]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setQuery((elem) => ({
      ...elem,
      name: e.target.value,
    }));
  };

  const handleTypeFilterChange = (value: string) => {
    setPokemonType(value);
    setQuery((elem) => ({
      ...elem,
      type: value,
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
      <div>
        <PokemonTypeFilter value={pokemonType} handleChange={handleTypeFilterChange} />
      </div>
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
