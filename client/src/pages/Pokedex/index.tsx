import React, { useEffect, useState } from 'react';

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
        const response = await fetch('http://zar.hosthot.ru/api/v1/pokemons');
        const result = await response.json();

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
        <ul>{data && data.pokemons.map((item) => <li>{item.name}</li>)}</ul>
      </div>
    </div>
  );
};

export default PokedexPage;
