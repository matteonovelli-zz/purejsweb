import { ModalComponent } from './modal-component'

describe('ModalComponent', () => {
  test('template without button', () => {
    const sut = new ModalComponent()
    const template = sut.template({
      message: 'message',
      showButton: false
    })
    expect(template).toEqual(`
    <div class="modal">
      <div class="modal-content box bordered text-center">
        <div>message</div>
        
      </div>
    </div>`)
  })

  test('template with button', () => {
    const sut = new ModalComponent()
    const template = sut.template({
      message: 'message',
      showButton: true
    })
    expect(template).toEqual(`
    <div class="modal">
      <div class="modal-content box bordered text-center">
        <div>message</div>
        <div class="text-center"><button class="button-primary" onclick="modalButtonClick()">Close</button></div>
      </div>
    </div>`)
  })
})
