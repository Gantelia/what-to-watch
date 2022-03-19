import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Films } from '../../types/films';
import { getGenreList } from '../../utils';

type GenreListProps = {
    films: Films;
    activeGenre: string;
    handleGenreChange: (chosenGenre: string) => void;
}

function GenreList({films, activeGenre, handleGenreChange}: GenreListProps): JSX.Element {
  const catalogGenres = getGenreList(films);

  return (
    <ul className="catalog__genres-list">
      {
        catalogGenres.map((catalogGenre) =>(
          <li key={catalogGenre.name} className={`catalog__genres-item ${catalogGenre.name === activeGenre ? 'catalog__genres-item--active': ''}`}>
            <Link to={AppRoute.Main} className="catalog__genres-link"
              onClick={() => handleGenreChange(catalogGenre.name)}
            >{catalogGenre.name}
            </Link>
          </li>),
        )
      }
    </ul>
  );
}

export default GenreList;
