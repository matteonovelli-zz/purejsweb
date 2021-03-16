import { BaseComponent } from '../base/base.component'

export class ModalComponent extends BaseComponent {
  constructor () {
    super('modal')

    document.modalButtonClick = () => {
      this.close()
    }
  }

  close () {
    this.loadComponent({ hidden: true })
  }

  template (values) {
    if (values.hidden) { return '' }
    return `
    <div class="modal">
      <div class="modal-content box bordered text-center">
        <div>${values.message}</div>
        ${values.showButton ? '<div class="text-center"><button class="button-primary" onclick="modalButtonClick()">Close</button></div>' : ''}
      </div>
    </div>`
  }
}
