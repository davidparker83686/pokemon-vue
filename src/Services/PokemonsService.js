import { AppState } from "../AppState";
import Pokemon from "../models/Pokemon";
import { pokemonApi } from "./AxiosService";

class PokemonsService {
  async getPokemons(query) {
    const res = await pokemonApi.get(query);
    AppState.results = res.data.results.map((r) => new Pokemon(r));
  }

  setActive(pokemon) {
    AppState.activePokemon = pokemon;
  }

  addPokemon(pokemon) {
    AppState.myPokemon = [...AppState.myPokemon, pokemon];
  }
  deletePokemon(pokemon) {
    AppState.myPokemon=AppState.myPokemon-pokemon
  }
}

export const pokemonsService = new PokemonsService();
