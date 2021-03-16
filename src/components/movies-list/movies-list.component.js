import { BaseComponent } from '../base/base.component'

export class MoviesListComponent extends BaseComponent {
  constructor () {
    super('movies-list')
    this.onclick = (id) => {}
    document.movieButtonClick = (id) => {
      this.onclick(id)
    }
  }

  template (values) {
    return `
    <div class="movies-list">
      ${values.films.map((film) => `
      <div class="movie box bordered">
        <div class="movie-image"><img class="thumbnail" src="${film.imageUrl}"></div>
        <div class="movie-separator"></div>
        <div class="movie-title"><b>${film.title}</b></div>
        <div class="movie-price primary"><b>${film.price} €</b></div>
        <div class="movie-genre">${film.genre}</div>
        <div class="movie-confirm"><button onclick="movieButtonClick('${film.id}')" class="${film.selected ? 'button-secondary' : 'button-primary'}">Select</button></div>
      </div>`).join('')}
    </div>`
  }
}
