import { MainPresenterMock } from '../../test/mocks/MainPresenterMock'
import { MainView } from './main.view'

describe('MainView', () => {
  describe('filmSelectionButtonEvent', () => {
    test('should call presenter filmSelected', () => {
      const mock = new MainPresenterMock()
      const sut = new MainView(mock, { innerHTML: '' })
      const spy = jest.spyOn(mock, 'filmSelected')
      sut.filmSelectionButtonEvent(1)
      expect(spy).toBeCalledTimes(1)
      expect(spy).toBeCalledWith(1)
    })
  })

  describe('snackSelectionButtonEvent', () => {
    test('should call presenter snackSelected', () => {
      const mock = new MainPresenterMock()
      const sut = new MainView(mock, { innerHTML: '' })
      const spy = jest.spyOn(mock, 'snackSelected')
      sut.snackSelectionButtonEvent(1)
      expect(spy).toBeCalledTimes(1)
      expect(spy).toBeCalledWith(1)
    })
  })

  describe('confirmButtonEvent', () => {
    test('should call presenter orderConfirmed', () => {
      const mock = new MainPresenterMock()
      const sut = new MainView(mock, { innerHTML: '' })
      const spy = jest.spyOn(mock, 'orderConfirmed')
      sut.confirmButtonEvent(1)
      expect(spy).toBeCalledTimes(1)
    })
  })
})
