import { BaseComponent } from '../base/base.component'

export class SnacksListComponent extends BaseComponent {
  constructor () {
    super('snacks-list')
    this.onclick = (id) => {}
    document.snackButtonClick = (id) => {
      this.onclick(id)
    }
  }

  template (values) {
    return `
    <div class="snacks-list">
      ${values.snacks.map((snack) => `
      <div class="snack box bordered">
        <div class="snack-name"><b>${snack.name}</b></div>
        <div class="snack-price primary"><b>${snack.price} €</b></div>
        <div class="snack-confirm"><button onclick="snackButtonClick('${snack.id}')" class="${snack.selected ? 'button-secondary' : 'button-primary'}">Select</button></div>
      </div>`).join('')}
    </div>`
  }
}
