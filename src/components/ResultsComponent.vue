<template>
  <div class="Results">
    <!-- NOTE to pass prop data to a child component it is passed as a bound attribute -->
    <PokemonElement
      v-for="pokemon in state.results"
      :key="pokemon.id"
      :pokemon="pokemon"
      @click="setActive(pokemon)"
    />
  </div>
</template>

<script>
import { computed, reactive } from "vue";
import { AppState } from "../AppState";
import { pokemonsService } from "../Services/PokemonsService";
import PokemonElement from "./PokemonElementComponent";
export default {
  name: "results",
  setup() {
    const state = reactive({
      results: computed(() => AppState.results),
    });

    return {
      state,
      setActive(pokemon) {
        pokemonsService.setActive(pokemon);
      },
    };
  },
  components: {
    PokemonElement,
  },
};
</script>

<style lang="scss" scoped></style>
