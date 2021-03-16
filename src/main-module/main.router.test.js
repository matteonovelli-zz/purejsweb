import { MainRouter } from './main.router'
import { MainView } from './main.view'

describe('MainRouter', () => {
  describe('CreateModule', () => {
    test('should return MainView instance', () => {
      const test = MainRouter.createModule({ innerHTML: '' })
      expect(test).toBeDefined()
      expect(test instanceof MainView).toBeTruthy()
    })
  })
})
