import 'core-js/stable'
import 'regenerator-runtime/runtime'
import { constants } from '../shared/constants'

const onload = (http, resolve) => {
  if (http.status >= 200 && http.status < 300) {
    resolve(JSON.parse(http.response))
  } else {
    throw createError(http.status, JSON.parse(http.response).error)
  }
}

const createError = (status, message) => {
  return new Error(`${status}: ${message}`)
}

export class ApiService {
  async getFilms (http) {
    return new Promise((resolve) => {
      http.open('GET', constants.GET_FILMS_URL)
      http.onload = () => { onload(http, resolve) }
      http.onerror = () => {
        throw createError(http.status, JSON.parse(http.response).error)
      }
      http.send()
    })
  }

  async getSnacks (http) {
    return new Promise((resolve) => {
      http.open('GET', constants.GET_SNACKS_URL)
      http.onload = () => { onload(http, resolve) }
      http.onerror = () => {
        throw createError(http.status, JSON.parse(http.response).error)
      }
      http.send()
    })
  }

  async confirmFilm (id, http) {
    return new Promise((resolve) => {
      http.open('POST', constants.CONFIRM_FILM_URL)
      http.onload = () => { onload(http, resolve) }
      http.onerror = () => {
        throw createError(http.status, JSON.parse(http.response).error)
      }
      http.setRequestHeader('Content-type', 'application/json')
      http.send(JSON.stringify({ id }))
    })
  }

  async confirmSnack (id, http) {
    return new Promise((resolve) => {
      http.open('POST', constants.CONFIRM_SNACK_URL)
      http.onload = () => { onload(http, resolve) }
      http.onerror = () => {
        throw createError(http.status, JSON.parse(http.response).error)
      }
      http.setRequestHeader('Content-type', 'application/json')
      http.send(JSON.stringify({ id }))
    })
  }
}
