import { MoviesListComponent } from './movies-list.component'

describe('MoviesListComponent', () => {
  test('template not selected', () => {
    const sut = new MoviesListComponent()
    const template = sut.template({
      films: [
        {
          imageUrl: 'image',
          title: 'title',
          price: 1,
          genre: 'genre',
          id: 'id',
          selected: false
        }
      ]
    })
    expect(template).toEqual(`
    <div class="movies-list">
      
      <div class="movie box bordered">
        <div class="movie-image"><img class="thumbnail" src="image"></div>
        <div class="movie-separator"></div>
        <div class="movie-title"><b>title</b></div>
        <div class="movie-price primary"><b>1 €</b></div>
        <div class="movie-genre">genre</div>
        <div class="movie-confirm"><button onclick="movieButtonClick('id')" class="button-primary">Select</button></div>
      </div>
    </div>`)
  })

  test('template selected', () => {
    const sut = new MoviesListComponent()
    const template = sut.template({
      films: [
        {
          imageUrl: 'image',
          title: 'title',
          price: 1,
          genre: 'genre',
          id: 'id',
          selected: true
        }
      ]
    })
    expect(template).toEqual(`
    <div class="movies-list">
      
      <div class="movie box bordered">
        <div class="movie-image"><img class="thumbnail" src="image"></div>
        <div class="movie-separator"></div>
        <div class="movie-title"><b>title</b></div>
        <div class="movie-price primary"><b>1 €</b></div>
        <div class="movie-genre">genre</div>
        <div class="movie-confirm"><button onclick="movieButtonClick('id')" class="button-secondary">Select</button></div>
      </div>
    </div>`)
  })
})
