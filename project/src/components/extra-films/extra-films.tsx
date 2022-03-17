import { useState } from 'react';
import { FilmInfo } from '../../types/types';
import MovieCard from '../movie-card/movie-card';

type ExtraFilmsProps = {
    extraFilms: FilmInfo[];
}

function ExtraFilms({extraFilms}: ExtraFilmsProps) {
  const [activePlayer, setActivePlayer] = useState<null | number>(null);

  return (
    <>
      {
        extraFilms.map((card) => (
          <MovieCard
            key={card.id}
            film={card}
            activePlayer={activePlayer}
            onMouseEnter={() => setActivePlayer(card.id)}
            onMouseLeave={() => setActivePlayer(null)}
          />),
        )
      }
    </>
  );
}

export default ExtraFilms;
