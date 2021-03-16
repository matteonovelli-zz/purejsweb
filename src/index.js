import { MainRouter } from './main-module/main.router'

const view = MainRouter.createModule(document.querySelector('cine-creditas'))
view.loadView()

document.confirmOrderButtonClick = () => {
  view.confirmButtonEvent()
}
