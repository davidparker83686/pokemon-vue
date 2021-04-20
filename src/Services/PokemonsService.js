import { AppState } from '../AppState'
import Pokemon from '../models/Pokemon'
import { pokemonApi } from './AxiosService'

class PokemonsService {
  async getPokemons(query) {
    const res = await pokemonApi.get(query)
    AppState.results = res.data.results.map(r => new Pokemon(r))
  }

  setActive(pokemon) {
    AppState.activeMovie = pokemon
  }
}

export const pokemonsService = new PokemonsService()
