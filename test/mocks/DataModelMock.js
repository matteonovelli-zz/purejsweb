import * as filmsResponse from '../responses/films.json'
import * as snacksResponse from '../responses/snacks.json'

export class DataModelMock {
  constructor () {
    this.films = filmsResponse.films
    this.snacks = snacksResponse.snacks
  }

  fetchFilms () {}

  fetchSnacks () {}
}
