import { TicketComponent } from './ticket.component'

describe('TicketComponent', () => {
  test('template', () => {
    const sut = new TicketComponent()
    const template = sut.template({
      movie: 'movie',
      snack: 'snack',
      queue: 1,
      seat: 2,
      price: 3
    })
    expect(template).toEqual(`
    <div class="ticket box bordered border-dashed">
      <div class="ticket-card">
        <div class="ticket-header"><b>Ticket</b></div>
        <div class="ticket-movie secondary"><b>movie</b></div>
        <div class="ticket-snack secondary"><b>snack</b></div>
        <div class="ticket-total"><b>total</b></div>
        <div class="ticket-seat text-right">Seat number: 2</div>
        <div class="ticket-queue text-right">Queue number: 1</div>
        <div class="ticket-price primary text-right"><b>3 €</b></div>
      </div>
    </div>`)
  })
})
