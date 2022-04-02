import { useState } from 'react';
import MovieCard from '../../components/movie-card/movie-card';
import { FilmsCount } from '../../const';
import { Films } from '../../types/films';

type FilmListProps = {
    filmCards: Films;
    filmsCount: FilmsCount;
}

function FilmList({filmCards, filmsCount}: FilmListProps): JSX.Element {
  const [activePlayer, setActivePlayer] = useState<null | number>(null);


  return (
    <div className="catalog__films-list">
      {
        filmCards.slice(0, filmsCount).map((card) =>(
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
