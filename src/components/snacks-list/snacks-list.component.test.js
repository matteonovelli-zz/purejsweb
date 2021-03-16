import { SnacksListComponent } from './snacks-list.component'

describe('SnacksListComponent', () => {
  test('template not selected', () => {
    const sut = new SnacksListComponent()
    const template = sut.template({
      snacks: [
        {
          name: 'name',
          price: 1,
          id: 'id',
          selected: false
        }
      ]
    })
    expect(template).toEqual(`
    <div class="snacks-list">
      
      <div class="snack box bordered">
        <div class="snack-name"><b>name</b></div>
        <div class="snack-price primary"><b>1 €</b></div>
        <div class="snack-confirm"><button onclick="snackButtonClick('id')" class="button-primary">Select</button></div>
      </div>
    </div>`)
  })

  test('template selected', () => {
    const sut = new SnacksListComponent()
    const template = sut.template({
      snacks: [
        {
          name: 'name',
          price: 1,
          id: 'id',
          selected: true
        }
      ]
    })
    expect(template).toEqual(`
    <div class="snacks-list">
      
      <div class="snack box bordered">
        <div class="snack-name"><b>name</b></div>
        <div class="snack-price primary"><b>1 €</b></div>
        <div class="snack-confirm"><button onclick="snackButtonClick('id')" class="button-secondary">Select</button></div>
      </div>
    </div>`)
  })
})
