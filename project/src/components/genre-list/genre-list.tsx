import { AppRoute } from '../../const';
import { Films } from '../../types/films';
import { Link } from 'react-router-dom';
import { getGenreList } from '../../utils';

type GenreListProps = {
    films: Films;
    activeGenre: string;
    onGenreChange: (chosenGenre: string) => void;
}

function GenreList({films, activeGenre, onGenreChange}: GenreListProps): JSX.Element {
  const catalogGenres = getGenreList(films);


  return (
    <ul className="catalog__genres-list">
      {
        catalogGenres.map((catalogGenre) =>(
          <li key={catalogGenre.name} className={`catalog__genres-item ${catalogGenre.name === activeGenre ? 'catalog__genres-item--active': ''}`}>
            <Link to={AppRoute.Main} className="catalog__genres-link"
              onClick={() => onGenreChange(catalogGenre.name)}
            >{catalogGenre.name}
            </Link>
          </li>),
        )
      }
    </ul>
  );
}

export default GenreList;
