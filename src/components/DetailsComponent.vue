
<template>
  <div class="details-component" v-if="state.pokemon">
    <h2>ACTIVE POKEMON</h2>
    <img :src="state.pokemon.img" alt="" />
    <h3>#{{ state.pokemon.id }}-{{ state.pokemon.name }}</h3>
    <p>TYPE:{{ state.pokemon.type }}</p>
    <p>
      HEIGHT - {{ state.pokemon.height }} / WEIGHT - {{ state.pokemon.weight }}
    </p>
  </div>
</template>

<script>
import { computed, reactive } from "vue";
import { AppState } from "../AppState";
export default {
  name: "DetailsComponent",
  setup() {
    const state = reactive({
      pokemon: computed(() => AppState.activePokemon),
    });
    return {
      state,
    };
  },
  components: {},
};
</script>

<style lang="scss" scoped>
</style>