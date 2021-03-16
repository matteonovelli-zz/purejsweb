import 'core-js/stable'
import 'regenerator-runtime/runtime'
import { DataModelMock } from '../../test/mocks/DataModelMock'
import { MainViewMock } from '../../test/mocks/MainViewMock'
import { MainInteractor } from './main.interactor'
import { MainPresenter } from './main.presenter'
import * as filmsResponse from '../../test/responses/films.json'
import * as snacksResponse from '../../test/responses/snacks.json'
import { ApiServiceMock } from '../../test/mocks/ApiServiceMock'

const createSut = () => {
  const dataModelMock = new DataModelMock()
  const viewMock = new MainViewMock()
  const apiServiceMock = new ApiServiceMock()
  const interactor = new MainInteractor(dataModelMock, apiServiceMock)
  const sut = new MainPresenter(interactor)
  sut.view = viewMock
  interactor.presenter = sut
  return sut
}

describe('MainPresenter', () => {
  describe('viewDidLoad', () => {
    test('should start loading data', () => {
      const sut = createSut()
      const spy = jest.spyOn(sut.interactor, 'loadData')
      sut.viewDidLoad()
      expect(spy).toBeCalledTimes(1)
    })
  })

  describe('presentFilms', () => {
    test('should call showFilmsList method on view', () => {
      const sut = createSut()
      const spy = jest.spyOn(sut.view, 'showFilmsList')
      sut.presentFilms([])
      expect(spy).toBeCalledTimes(1)
      expect(spy).toBeCalledWith([])
    })
  })

  describe('presentSnacks', () => {
    test('should call showSnacksList method on view', () => {
      const sut = createSut()
      const spy = jest.spyOn(sut.view, 'showSnacksList')
      sut.presentSnacks([])
      expect(spy).toBeCalledTimes(1)
      expect(spy).toBeCalledWith([])
    })
  })

  describe('presentTicket', () => {
    test('should call showTicket method on view', () => {
      const sut = createSut()
      const spy = jest.spyOn(sut.view, 'showTicket')
      sut.films = filmsResponse.films
      sut.snacks = snacksResponse.snacks
      sut.selectedFilm = 'abc'
      sut.selectedSnack = '123'
      sut.presentTicket({
        queueNumber: 1,
        seatNumber: 1
      })
      expect(spy).toBeCalledTimes(1)
      expect(spy).toBeCalledWith({
        movie: 'Interstellar',
        price: 12.89,
        queue: 1,
        seat: 1,
        snack: 'Small Popcorn'
      })
    })
  })

  describe('orderConfirmed', () => {
    test('should confirm order when both film and snack are selected', () => {
      const sut = createSut()
      sut.selectedFilm = 1
      sut.selectedSnack = 2
      const spy = jest.spyOn(sut.interactor, 'confirmOrder')
      sut.orderConfirmed()
      expect(spy).toBeCalledTimes(1)
      expect(spy).toBeCalledWith(1, 2)
    })
  })

  describe('enableConfirmButtonIfNeeded', () => {
    test('should return true if both film and snack are selected', () => {
      const sut = createSut()
      sut.selectedFilm = 1
      sut.selectedSnack = 2
      const test = sut.enableConfirmButtonIfNeeded()
      expect(test).toBeTruthy()
    })

    test('else should return false', () => {
      const sut = createSut()
      sut.selectedFilm = 1
      const test = sut.enableConfirmButtonIfNeeded()
      expect(test).toBeFalsy()
    })
  })

  describe('filmSelected', () => {
    test('should set selectedFilm property', () => {
      const sut = createSut()
      sut.films = filmsResponse.films
      sut.filmSelected('abc')
      expect(sut.selectedFilm).toEqual('abc')
    })
  })

  describe('snackSelected', () => {
    test('should set selectedSnack property', () => {
      const sut = createSut()
      sut.snacks = snacksResponse.snacks
      sut.snackSelected('123')
      expect(sut.selectedSnack).toEqual('123')
    })
  })

  describe('presentError', () => {
    const sut = createSut()
    const spy = jest.spyOn(sut.view, 'showErrorMessage')
    sut.presentError('Error example')
    expect(spy).toBeCalledTimes(1)
    expect(spy).toBeCalledWith('Error example')
  })
})
