export class XMLHttpRequestMock {
  constructor (status, response, throwError) {
    this.response = response
    this.status = status
    this.throwError = throwError
  }

  open (method, url) {}

  send (params) {
    if (this.throwError) {
      this.onerror()
    } else {
      this.onload()
    }
  }

  onload () {}

  onerror () {}

  setRequestHeader (key, value) {}
}
