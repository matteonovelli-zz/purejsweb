import { DataModelMock } from '../../test/mocks/DataModelMock'
import { MainPresenterMock } from '../../test/mocks/MainPresenterMock'
import { XMLHttpRequestMock } from '../../test/mocks/XMLHttpRequestMock'
import { ApiService } from '../services/api.service'
import { MainInteractor } from './main.interactor'
import * as filmsResponse from '../../test/responses/films.json'
import * as snacksResponse from '../../test/responses/snacks.json'
import { DataModel } from '../model/data.model'
import { ApiServiceMock } from '../../test/mocks/ApiServiceMock'

const createSut = (httpMock) => {
  const dataModelMock = new DataModelMock()
  const presenterMock = new MainPresenterMock()
  const apiServiceMock = new ApiServiceMock()
  const sut = new MainInteractor(dataModelMock, apiServiceMock, () => { return httpMock })
  sut.presenter = presenterMock
  return sut
}

describe('MainInteractor', () => {
  describe('LoadData', () => {
    test('Should fetch films', async () => {
      const sut = createSut(new XMLHttpRequestMock(200, '{}', false))
      const spy = jest.spyOn(sut.dataModel, 'fetchFilms')
      await sut.loadData()
      expect(spy).toBeCalledTimes(1)
    })

    test('Should present films', async () => {
      const sut = createSut(new XMLHttpRequestMock(200, '{}', false))
      const spy = jest.spyOn(sut.presenter, 'presentFilms')
      await sut.loadData()
      expect(spy).toBeCalledTimes(1)
      expect(spy).toHaveBeenCalledWith(filmsResponse.films)
    })

    test('Should fetch snacks', async () => {
      const sut = createSut(new XMLHttpRequestMock(200, '{}', false))
      const spy = jest.spyOn(sut.dataModel, 'fetchSnacks')
      await sut.loadData()
      expect(spy).toBeCalledTimes(1)
    })

    test('Should present snacks', async () => {
      const sut = createSut(new XMLHttpRequestMock(200, '{}', false))
      const spy = jest.spyOn(sut.presenter, 'presentSnacks')
      await sut.loadData()
      expect(spy).toBeCalledTimes(1)
      expect(spy).toHaveBeenCalledWith(snacksResponse.snacks)
    })

    test('On error should present error message', async () => {
      const httpMock = new XMLHttpRequestMock(500, '{"error": "Error"}', true)
      const dataModel = new DataModel(new ApiService(httpMock))
      const sut = createSut(httpMock)
      sut.dataModel = dataModel
      const spy = jest.spyOn(sut.presenter, 'presentError')
      await sut.loadData()
      expect(spy).toBeCalledTimes(1)
      expect(spy).toHaveBeenCalledWith('Fetch data error: 500: Error')
    })
  })

  describe('ConfirmOrder', () => {
    test('Should request confirmFilm service', async () => {
      const mock = new XMLHttpRequestMock(200, '{"error": ""}', false)
      const sut = createSut(mock)
      const spy = jest.spyOn(sut.apiService, 'confirmFilm')
      await sut.confirmOrder(1, 2)
      expect(spy).toBeCalledTimes(1)
      expect(spy).toBeCalledWith(1, mock)
    })

    test('Should request confirmSnack service', async () => {
      const mock = new XMLHttpRequestMock(200, '{"error": ""}', false)
      const sut = createSut(mock)
      const spy = jest.spyOn(sut.apiService, 'confirmSnack')
      await sut.confirmOrder(1, 2)
      expect(spy).toBeCalledTimes(1)
      expect(spy).toBeCalledWith(2, mock)
    })

    test('Should call presentTicket method', async () => {
      const sut = createSut(new XMLHttpRequestMock(200, '{"foo": "bar"}', false))
      const spy = jest.spyOn(sut.presenter, 'presentTicket')
      await sut.confirmOrder(1, 2)
      expect(spy).toBeCalledTimes(1)
      expect(spy).toBeCalledWith({ queueNumber: undefined, seatNumber: undefined })
    })

    test('On error should call presentError method', async () => {
      const sut = createSut(new XMLHttpRequestMock(500, '{}', true))
      const spy = jest.spyOn(sut.presenter, 'presentError')
      await sut.confirmOrder(undefined, undefined)
      expect(spy).toBeCalledTimes(1)
      expect(spy).toBeCalledWith('Confirm order error: Test error')
    })
  })
})
