import React, { useEffect, useState } from 'react';
import req from '../../utils/request';

interface IData {
  total: number;
  pokemons: any[];
}

const usePokemons = () => {
  const [data, setData] = useState<IData>({
    total: 0,
    pokemons: [],
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getPokemons = async () => {
      setIsLoading(true);
      try {
        const result = await req('getPokemons');

        setData(result);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getPokemons();
  }, []);

  return {
    data,
    isLoading,
    isError,
  };
};

const PokedexPage = () => {
  const { data, isLoading, isError } = usePokemons();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error!!!</div>;
  }

  return (
    <div>
      <div>Pokedex!!! {data && data.total}</div>
      <div>
        <ul>{data && data.pokemons.map((item) => <li key={item.name}>{item.name}</li>)}</ul>
      </div>
    </div>
  );
};

export default PokedexPage;
