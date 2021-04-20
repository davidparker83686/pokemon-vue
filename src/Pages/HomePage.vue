<template>
  <div class="component container-fluid">
    <div class="row">
      <div class="col">
        <form @submit.prevent="search">
          <label for="movie">Movie Title</label>
          <input
            type="text"
            name="movie"
            id="movie"
            placeholder="Title..."
            v-model="state.query"
          />
          <button type="submit" class="btn btn-primary">Search</button>
        </form>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <Results />
      </div>
      <div class="col">
        <Details />
      </div>
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
