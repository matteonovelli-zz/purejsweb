import { constants } from '../shared/constants'
import { ApiService } from './api.service'
import { XMLHttpRequestMock } from '../../test/mocks/XMLHttpRequestMock'

describe('Api service', () => {
  describe('getFilms', () => {
    test('should GET from /api/films', async () => {
      const mock = new XMLHttpRequestMock(200, '{}', false)
      const sut = new ApiService(mock)
      const spy = jest.spyOn(mock, 'open')
      await sut.getFilms(mock)
      expect(spy).toBeCalledTimes(1)
      expect(spy).toBeCalledWith('GET', constants.GET_FILMS_URL)
    })

    test('should call send method', async () => {
      const mock = new XMLHttpRequestMock(200, '{}', false)
      const sut = new ApiService(mock)
      const spy = jest.spyOn(mock, 'send')
      await sut.getFilms(mock)
      expect(spy).toBeCalledTimes(1)
    })

    test('should return response', async () => {
      const mock = new XMLHttpRequestMock(200, '{"foo":"bar"}', false)
      const sut = new ApiService(mock)
      const response = await sut.getFilms(mock)
      expect(response).toEqual({ foo: 'bar' })
    })

    test('on error should throw an exception', async () => {
      const mock = new XMLHttpRequestMock(500, '{"error": "Error"}', true)
      const sut = new ApiService(mock)

      try {
        await sut.getFilms(mock)
      } catch (error) {
        expect(error.message).toEqual('500: Error')
      }
    })

    test('when status is not 2XX should throw an exception', async () => {
      const mock = new XMLHttpRequestMock(400, '{"error": "Error"}', false)
      const sut = new ApiService(mock)

      try {
        await sut.getFilms(mock)
      } catch (error) {
        expect(error.message).toEqual('400: Error')
      }
    })
  })

  describe('getSnacks', () => {
    test('should GET from /api/snacks', async () => {
      const mock = new XMLHttpRequestMock(200, '{}', false)
      const sut = new ApiService(mock)
      const spy = jest.spyOn(mock, 'open')
      await sut.getSnacks(mock)
      expect(spy).toBeCalledTimes(1)
      expect(spy).toBeCalledWith('GET', constants.GET_SNACKS_URL)
    })

    test('should call send method', async () => {
      const mock = new XMLHttpRequestMock(200, '{}', false)
      const sut = new ApiService(mock)
      const spy = jest.spyOn(mock, 'send')
      await sut.getSnacks(mock)
      expect(spy).toBeCalledTimes(1)
    })

    test('should return response', async () => {
      const mock = new XMLHttpRequestMock(200, '{"foo":"bar"}', false)
      const sut = new ApiService(mock)
      const response = await sut.getSnacks(mock)
      expect(response).toEqual({ foo: 'bar' })
    })

    test('on error should throw an exception', async () => {
      const mock = new XMLHttpRequestMock(500, '{"error": "Error"}', true)
      const sut = new ApiService(mock)

      try {
        await sut.getSnacks(mock)
      } catch (error) {
        expect(error.message).toEqual('500: Error')
      }
    })

    test('when status is not 2XX should throw an exception', async () => {
      const mock = new XMLHttpRequestMock(400, '{"error": "Error"}', false)
      const sut = new ApiService(mock)

      try {
        await sut.getSnacks(mock)
      } catch (error) {
        expect(error.message).toEqual('400: Error')
      }
    })
  })

  describe('confirmFilm', () => {
    test('should POST to /api/film/confirm', async () => {
      const mock = new XMLHttpRequestMock(200, '{}', false)
      const sut = new ApiService()
      const spy = jest.spyOn(mock, 'open')
      await sut.confirmFilm(1, mock)
      expect(spy).toBeCalledTimes(1)
      expect(spy).toBeCalledWith('POST', constants.CONFIRM_FILM_URL)
    })

    test('should call send method with params', async () => {
      const mock = new XMLHttpRequestMock(200, '{}', false)
      const sut = new ApiService()
      const spy = jest.spyOn(mock, 'send')
      await sut.confirmFilm(1, mock)
      expect(spy).toBeCalledTimes(1)
      expect(spy).toBeCalledWith(JSON.stringify({ id: 1 }))
    })

    test('should return response', async () => {
      const mock = new XMLHttpRequestMock(200, '{"foo":"bar"}', false)
      const sut = new ApiService()
      const response = await sut.confirmFilm(1, mock)
      expect(response).toEqual({ foo: 'bar' })
    })

    test('on error should throw an exception', async () => {
      const mock = new XMLHttpRequestMock(500, '{"error": "Error"}', true)
      const sut = new ApiService()

      try {
        await sut.confirmFilm(1, mock)
      } catch (error) {
        expect(error.message).toEqual('500: Error')
      }
    })

    test('when status is not 2XX should throw an exception', async () => {
      const mock = new XMLHttpRequestMock(400, '{"error": "Error"}', false)
      const sut = new ApiService()

      try {
        await sut.confirmFilm(1, mock)
      } catch (error) {
        expect(error.message).toEqual('400: Error')
      }
    })
  })

  describe('confirmSnack', () => {
    test('should POST to /api/snack/confirm', async () => {
      const mock = new XMLHttpRequestMock(200, '{}', false)
      const sut = new ApiService()
      const spy = jest.spyOn(mock, 'open')
      await sut.confirmSnack(1, mock)
      expect(spy).toBeCalledTimes(1)
      expect(spy).toBeCalledWith('POST', constants.CONFIRM_SNACK_URL)
    })

    test('should call send method with params', async () => {
      const mock = new XMLHttpRequestMock(200, '{}', false)
      const sut = new ApiService()
      const spy = jest.spyOn(mock, 'send')
      await sut.confirmSnack(1, mock)
      expect(spy).toBeCalledTimes(1)
      expect(spy).toBeCalledWith(JSON.stringify({ id: 1 }))
    })

    test('should return response', async () => {
      const mock = new XMLHttpRequestMock(200, '{"foo":"bar"}', false)
      const sut = new ApiService()
      const response = await sut.confirmSnack(1, mock)
      expect(response).toEqual({ foo: 'bar' })
    })

    test('on error should throw an exception', async () => {
      const mock = new XMLHttpRequestMock(500, '{"error": "Error"}', true)
      const sut = new ApiService()

      try {
        await sut.confirmSnack(1, mock)
      } catch (error) {
        expect(error.message).toEqual('500: Error')
      }
    })

    test('when status is not 2XX should throw an exception', async () => {
      const mock = new XMLHttpRequestMock(400, '{"error": "Error"}', false)
      const sut = new ApiService()

      try {
        await sut.confirmSnack(1, mock)
      } catch (error) {
        expect(error.message).toEqual('400: Error')
      }
    })
  })
})
