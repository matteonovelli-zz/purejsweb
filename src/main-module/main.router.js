import { DataModel } from '../model/data.model'
import { ApiService } from '../services/api.service'
import { MainView } from './main.view'
import { MainInteractor } from './main.interactor'
import { MainPresenter } from './main.presenter'
import { httpFactory } from '../factories/http.factory'

export class MainRouter {
  static createModule (element) {
    const apiService = new ApiService()
    const dataModel = new DataModel(apiService)
    const interactor = new MainInteractor(dataModel, apiService, httpFactory)
    const presenter = new MainPresenter(interactor)
    interactor.presenter = presenter
    const view = new MainView(presenter, element)
    presenter.view = view
    return view
  }
}
