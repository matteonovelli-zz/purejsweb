import { DataModel } from './data.model'
import { ApiService } from '../services/api.service'
import { XMLHttpRequestMock } from '../../test/mocks/XMLHttpRequestMock'
import * as filmsResponse from '../../test/responses/films.json'
import * as snacksResponse from '../../test/responses/snacks.json'

describe('Data model', () => {
  describe('Films', () => {
    test('After init should be equal to []', () => {
      const mock = new ApiService(new XMLHttpRequestMock(200, '{}', false))
      const sut = new DataModel(mock)
      expect(sut.films).toEqual([])
    })

    test('After fetchFilms should be equal to fetched data', async () => {
      const mock = new XMLHttpRequestMock(200, JSON.stringify(filmsResponse), false)
      const sut = new DataModel(new ApiService())
      await sut.fetchFilms(mock)
      expect(sut.films.length).toEqual(filmsResponse.films.length)
    })
  })

  describe('Snacks', () => {
    test('After init should be equal to []', () => {
      const mock = new ApiService(new XMLHttpRequestMock(200, '{}', false))
      const sut = new DataModel(mock)
      expect(sut.snacks).toEqual([])
    })

    test('After fetchSnacks should be equal to fetched data', async () => {
      const mock = new XMLHttpRequestMock(200, JSON.stringify(snacksResponse), false)
      const sut = new DataModel(new ApiService())
      await sut.fetchSnacks(mock)
      expect(sut.snacks.length).toEqual(snacksResponse.snacks.length)
    })
  })
})
