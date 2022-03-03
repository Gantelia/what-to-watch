import MovieCard from '../../components/movie-card/movie-card';
import {FilmInfo} from '../../types/types';
import { getActiveGenre } from '../../utils';


type FilmListProps = {
    filmCards: FilmInfo[];
    activeGenre: string;
}

function FilmList({filmCards, activeGenre}: FilmListProps): JSX.Element {
  const filmsOfGenre: FilmInfo[] = [];
  filmCards.forEach((film) => {
    if (film.genre === getActiveGenre(activeGenre)) {
      filmsOfGenre.push(film);
    }
  });

  const films = activeGenre === 'All genres'? filmCards : filmsOfGenre;

  return (
    <div className="catalog__films-list">
      {
        films.map((card) =>(
          <MovieCard
            key={card.id}
            film={card}
          />),
        )
      }
    </div>
  );
}

export default FilmList;
