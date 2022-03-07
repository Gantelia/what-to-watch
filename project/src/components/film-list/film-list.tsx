import { useState } from 'react';
import MovieCard from '../../components/movie-card/movie-card';
import { FilmsCount } from '../../const';
import {FilmInfo} from '../../types/types';
import { getActiveGenre } from '../../utils';


type FilmListProps = {
    filmCards: FilmInfo[];
    activeGenre: string;
    filmsCount: FilmsCount;
}

function FilmList({filmCards, activeGenre, filmsCount}: FilmListProps): JSX.Element {
  const [activePlayer, setActivePlayer] = useState<null | number>(null);

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
        films.slice(0, filmsCount).map((card) =>(
          <MovieCard
            key={card.id}
            film={card}
            activePlayer={activePlayer}
            onMouseEnter={() => setActivePlayer(card.id)}
            onMouseLeave={() => setActivePlayer(null)}
          />),
        )
      }
    </div>
  );
}

export default FilmList;
