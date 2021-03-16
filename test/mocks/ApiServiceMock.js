export class ApiServiceMock {
  async getFilms () {
    return {}
  }

  async getSnacks () {
    return {}
  }

  async confirmFilm (id) {
    if (!id) { throw new Error('Test error') }
    return id
  }

  async confirmSnack (id) {
    if (!id) { throw new Error('Test error') }
    return id
  }
}
