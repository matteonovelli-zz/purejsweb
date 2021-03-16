export class Film {
  constructor (data) {
    this.id = data.id
    this.title = data.title
    this.genre = data.genre
    this.price = data.price
    this.imageUrl = data.imageUrl
    this.selected = false
  }
}
