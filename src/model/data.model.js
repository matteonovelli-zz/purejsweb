import 'core-js/stable'
import 'regenerator-runtime/runtime'
import { Film } from './film.model'
import { Snack } from './snack.model'

export class DataModel {
  constructor (apiService) {
    this.apiService = apiService
    this.films = []
    this.snacks = []
  }

  async fetchFilms (httpRequest) {
    const response = await this.apiService.getFilms(httpRequest)
    this.films = response.films.map((data) => new Film(data))
  }

  async fetchSnacks (httpRequest) {
    const response = await this.apiService.getSnacks(httpRequest)
    this.snacks = response.snacks.map((data) => new Snack(data))
  }
}
