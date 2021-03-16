export class BaseComponent {
  constructor (selector) {
    this.selector = selector
  }

  loadComponent (values) {
    const element = document.querySelector(this.selector)
    element.innerHTML = this.template(values)
  }

  template (values) {
    return ''
  }
}
