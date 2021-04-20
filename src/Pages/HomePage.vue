<template>
  <div class="component container-fluid">

    <div class="row">
      <div class="col-11">
          <Results />
      </div>
    </div>
    <div class="row">
      <div class="col-6">

      </div>

      <div class="col-6">
        <Details />
      </div>

<button class="btn btn-danger" type="button" v-on:click="addPokemon(pokemon)" >Add to Your Party</button>
<button class="btn btn-info" type="button" v-on:click="deletePokemon(pokemon)">Remove from Party</button>

    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import { pokemonsService } from "../Services/PokemonsService";
import Results from "../components/ResultsComponent";
import Details from "../components/DetailsComponent";
export default {
  name: "HomePage",
  setup() {
    const state = reactive({
      query: "",
    });
    return {
      state,
      async search() {
        try {
          await pokemonsService.getPokemons(state.query);
          state.query = "";
        } catch (e) {
          console.error(e);
        }
      },
    };
  },
  components: {
    Results,
    Details,
  },
};
</script>

<style lang="scss" scoped></style>
