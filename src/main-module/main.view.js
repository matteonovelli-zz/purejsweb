import { ModalComponent } from '../components/modal/modal-component'
import { MoviesListComponent } from '../components/movies-list/movies-list.component'
import { SnacksListComponent } from '../components/snacks-list/snacks-list.component'
import { TicketComponent } from '../components/ticket/ticket.component'

const template = `
<div class="container">
  <div class="header">
    <h1 class="primary text-center">Welcome to CineCreditas</h1>
  </div>
  <div class="films">
    <h2 class="secondary">Select a movie to watch</h2>
    <movies-list></movies-list>
  </div>
  <div class="snacks">
    <h2 class="secondary">Select a snack to enjoy</h2>
    <snacks-list></snacks-list>
  </div>
  <div class="confirm">
    <button class="button-primary" onclick="confirmOrderButtonClick()">Confirm Order</button>
  </div>
  <ticket-card></ticket-card>
</div>
<modal></modal>`

export class MainView {
  constructor (presenter, element) {
    this.presenter = presenter
    element.innerHTML = template
    this.modal = new ModalComponent()
  }

  loadView () {
    this.presenter.viewDidLoad()
  }

  showFilmsList (films) {
    const component = new MoviesListComponent()
    component.onclick = (id) => {
      this.filmSelectionButtonEvent(id)
    }
    component.loadComponent({ films })
  }

  showSnacksList (snacks) {
    const component = new SnacksListComponent()
    component.onclick = (id) => {
      this.snackSelectionButtonEvent(id)
    }
    component.loadComponent({ snacks })
  }

  showTicket (ticket) {
    const component = new TicketComponent()
    component.loadComponent(ticket)
  }

  startLoadingIndicator () {
    this.showModal('Loading...')
  }

  stopLoadingIndicator () {
    this.hideModal()
  }

  showErrorMessage (message) {
    this.showModal(message, true)
  }

  showModal (message, showButton) {
    this.modal.loadComponent({ message, showButton })
  }

  hideModal () {
    this.modal.close()
  }

  filmSelectionButtonEvent (id) {
    this.presenter.filmSelected(id)
  }

  snackSelectionButtonEvent (id) {
    this.presenter.snackSelected(id)
  }

  confirmButtonEvent () {
    this.presenter.orderConfirmed()
  }
}
