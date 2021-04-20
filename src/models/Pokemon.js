
export default class Pokemon {
    constructor({ name, img, sprites, weight, height, types, id }) {
        this.name = name
        this.img = img || sprites.other['official-artwork'].front_default
        this.weight = weight
        this.height = height
        this.types = types
        this.id = id
  }
}


