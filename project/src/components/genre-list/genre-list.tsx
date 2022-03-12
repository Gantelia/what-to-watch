import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { FilmInfo, Genre } from '../../types/types';
import { getCatalogGenre } from '../../utils';

type GenreListProps = {
    films: FilmInfo[];
}

function GenreList({films}: GenreListProps): JSX.Element {
  const [userGenre, setUserGenre] = useState('All genres');

  const collectedGenres: string[] = [];
  films.forEach((film) => collectedGenres.push(film.genre));
  const uniqueGenres = ['All genres',...new Set(collectedGenres)];
  const catalogGenres: Genre[] = [];
  uniqueGenres.map((genre, index) =>
    catalogGenres.push({id: index, name: getCatalogGenre(genre)},
    ));

  return (
    <ul className="catalog__genres-list">
      {
        catalogGenres.map((catalogGenre) =>(
          <li key={catalogGenre.name} className={`catalog__genres-item ${catalogGenre.name === userGenre ? 'catalog__genres-item--active': ''}`}>
            <Link to={AppRoute.Main} className="catalog__genres-link"
              onClick={() => setUserGenre(catalogGenre.name)}
            >{catalogGenre.name}
            </Link>
          </li>),
        )
      }
    </ul>
  );
}

export default GenreList;
