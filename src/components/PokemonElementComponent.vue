<template>
  <div class="pokemon">
    <img src="{{pokemon.name}}" class="mr-3" alt="Pokemon Image" />
    <div class="pokemon-body">
      <h5 class="mt-0">#{{ pokemon.id }}-{{ pokemon.name }}</h5>
      <p>{{ pokemon.types }}</p>
      <p></p>
    </div>
  </div>
</template>


<script>
export default {
  name: "",
  props: {},
  setup() {
    return {};
  },
  components: {},
};
</script>


<style scoped lang="scss" scoped>
.media {
  cursor: pointer;
  &:hover {
    background-color: rgba(98, 255, 247, 0.726);
  }
}
</style>
