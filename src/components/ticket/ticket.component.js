import { BaseComponent } from '../base/base.component'

export class TicketComponent extends BaseComponent {
  constructor () {
    super('ticket-card')
  }

  template (values) {
    return `
    <div class="ticket box bordered border-dashed">
      <div class="ticket-card">
        <div class="ticket-header"><b>Ticket</b></div>
        <div class="ticket-movie secondary"><b>${values.movie}</b></div>
        <div class="ticket-snack secondary"><b>${values.snack}</b></div>
        <div class="ticket-total"><b>total</b></div>
        <div class="ticket-seat text-right">Seat number: ${values.seat}</div>
        <div class="ticket-queue text-right">Queue number: ${values.queue}</div>
        <div class="ticket-price primary text-right"><b>${values.price} €</b></div>
      </div>
    </div>`
  }
}
