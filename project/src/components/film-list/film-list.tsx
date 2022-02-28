import MovieCard from '../../components/movie-card/movie-card';
import {FilmCard} from '../../types/types';

type FilmListProps = {
    filmCards: FilmCard[];
}

function FilmList({filmCards}: FilmListProps): JSX.Element {
  return (
    <div className="catalog__films-list">
      {
        filmCards.map((card) =>(
          <MovieCard
            key = {card.id}
            previewImage = {card.previewImage}
            name = {card.name}
            id = {card.id}
          />),
        )
      }
    </div>
  );
}

export default FilmList;
