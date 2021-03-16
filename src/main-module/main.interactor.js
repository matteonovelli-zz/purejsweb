import { Ticket } from '../model/ticket.model'

export class MainInteractor {
  constructor (dataModel, apiService, httpFactory) {
    this.dataModel = dataModel
    this.apiService = apiService
    this.httpFactory = httpFactory
    this.presenter = undefined
  }

  async loadData () {
    try {
      await this.dataModel.fetchFilms(this.httpFactory())
      this.presenter.presentFilms(this.dataModel.films)
      await this.dataModel.fetchSnacks(this.httpFactory())
      this.presenter.presentSnacks(this.dataModel.snacks)
    } catch (error) {
      this.presenter.presentError(`Fetch data error: ${error.message}`)
    }
  }

  async confirmOrder (filmId, snackId) {
    try {
      const [film, snack] = await Promise.all([this.apiService.confirmFilm(filmId, this.httpFactory()), this.apiService.confirmSnack(snackId, this.httpFactory())])
      this.presenter.presentTicket(new Ticket(film.seatNumber, snack.queueNumber))
    } catch (error) {
      this.presenter.presentError(`Confirm order error: ${error.message}`)
    }
  }
}
