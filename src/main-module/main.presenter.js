export class MainPresenter {
  constructor (interactor) {
    this.interactor = interactor
    this.view = undefined
    this.selectedFilm = undefined
    this.selectedSnack = undefined
    this.confirmButtonDisabled = true
    this.films = undefined
    this.snacks = undefined
  }

  viewDidLoad () {
    this.view.startLoadingIndicator()
    this.interactor.loadData()
  }

  presentFilms (films) {
    this.films = films.map((film) => {
      film.selected = film.id === this.selectedFilm
      return film
    })
    this.view.showFilmsList(films)
  }

  presentSnacks (snacks) {
    this.view.stopLoadingIndicator()
    this.snacks = snacks.map((snack) => {
      snack.selected = snack.id === this.selectedSnack
      return snack
    })
    this.view.showSnacksList(snacks)
  }

  presentTicket (ticket) {
    this.view.stopLoadingIndicator()
    const film = this.films.find((film) => film.id === this.selectedFilm)
    const snack = this.snacks.find((snack) => snack.id === this.selectedSnack)
    this.view.showTicket({
      seat: ticket.seatNumber,
      queue: ticket.queueNumber,
      movie: film.title,
      snack: snack.name,
      price: film.price + snack.price
    })
  }

  orderConfirmed () {
    if (!this.selectedFilm || !this.selectedSnack) { return }
    this.view.startLoadingIndicator()
    this.interactor.confirmOrder(this.selectedFilm, this.selectedSnack)
  }

  enableConfirmButtonIfNeeded () {
    return this.selectedFilm !== undefined && this.selectedSnack !== undefined
  }

  filmSelected (id) {
    this.selectedFilm = id
    this.presentFilms(this.films)
  }

  snackSelected (id) {
    this.selectedSnack = id
    this.presentSnacks(this.snacks)
  }

  presentError (message) {
    this.view.showErrorMessage(message)
  }
}
