import { FilmInfo } from './types/types';
import { getActiveGenre } from './utils';

export const getFilmListOfGenre = (filmCards: FilmInfo[], activeGenre: string) => {
  if (activeGenre === 'All genres') {
    return filmCards;
  }
  const filmsOfGenre: FilmInfo[] = [];
  filmCards.forEach((film) => {
    if (film.genre === getActiveGenre(activeGenre)) {
      filmsOfGenre.push(film);
    }
  });
  return filmsOfGenre;
};
