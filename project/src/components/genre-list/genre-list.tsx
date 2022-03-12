import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppDispatch } from '../../hooks';
import { changeGenre } from '../../store/action';
import { FilmInfo} from '../../types/types';
import { getGenreList } from '../../utils';

type GenreListProps = {
    films: FilmInfo[];
    activeGenre: string;
}

function GenreList({films, activeGenre}: GenreListProps): JSX.Element {
  const dispatch = useAppDispatch();

  const catalogGenres = getGenreList(films);

  return (
    <ul className="catalog__genres-list">
      {
        catalogGenres.map((catalogGenre) =>(
          <li key={catalogGenre.name} className={`catalog__genres-item ${catalogGenre.name === activeGenre ? 'catalog__genres-item--active': ''}`}>
            <Link to={AppRoute.Main} className="catalog__genres-link"
              onClick={() => dispatch(changeGenre(catalogGenre.name))}
            >{catalogGenre.name}
            </Link>
          </li>),
        )
      }
    </ul>
  );
}

export default GenreList;
