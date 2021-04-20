
import { reactive } from 'vue'
import Pokemon from './models/Pokemon'

export const AppState = reactive({
  /** @type {Pokemon[]} */
  results: [],
  /** @type {Pokemon} */
  activePokemon: null
})