import path from "path";
import fs from "fs";
import {
  IPokemonsResponse,
  IPokemonsRequest,
} from "../interfaces/routes/pokemons";
import { IPokemonTypes } from "../interfaces/routes/filters";

class Pokemons {
  data: IPokemonsResponse;

  constructor() {
    const fileUrl = path.resolve("./dist/pokemons.json");
    const rawData = fs.readFileSync(fileUrl);
    this.data = JSON.parse(rawData.toString());
  }

  getFilteredPokemons(filter: IPokemonsRequest): IPokemonsResponse {
    const { name, limit = 12, offset = 0, type } = filter;

    const result: IPokemonsResponse = {
      total: this.data.total,
      count: 0,
      offset,
      limit,
      pokemons: [],
    };

    const pokemonList = this.data.pokemons.filter(
      (elem) =>
        (!name || elem.name_clean.includes(name)) &&
        (!type || elem.types.includes(type))
    );
    for (let i = offset; i < limit + offset; i++) {
      if (pokemonList[i]) {
        result.pokemons.push(pokemonList[i]);
        result.count++;
      }
    }
    result.total = pokemonList.length;
    return result;
  }

  getAllTypes(): IPokemonTypes[] {
    const types: IPokemonTypes[] = [];

    const selectTypes: Set<string> = new Set();
    this.data.pokemons.forEach((value) => {
      value.types.forEach((val) => {
        if (!selectTypes.has(val)) {
          selectTypes.add(val);
          types.push({
            id: val,
            value: val,
          });
        }
      });
    });

    return types;
  }
}

const pokemons: Pokemons = new Pokemons();

export default pokemons;
