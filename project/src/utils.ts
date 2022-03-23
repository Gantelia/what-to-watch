import { AuthorizationStatus, HOUR_IN_MINUTES, Rating } from './const';
import { Films } from './types/films';
import { Genres } from './types/genres';
import { ConvertRating } from './types/util-types';

export   const convertMinutes = (num: number) => {
  const hours = Math.floor(num / HOUR_IN_MINUTES);
  const minutes = num % HOUR_IN_MINUTES;
  return `${hours  }h ${  minutes}m`;
};

export const getActiveGenre = (genre: string) => {
  switch (genre) {
    case 'Comedies':
      return 'Comedy';
    case 'Dramas':
      return 'Drama';
    case 'Thrillers':
      return 'Thriller';
    default:
      return genre;
  }
};

export const getCatalogGenre = (genre:string) => {
  switch (genre) {
    case 'Comedy':
      return 'Comedies';
    case 'Drama':
      return 'Dramas';
    case 'Thriller':
      return 'Thrillers';
    default:
      return genre;
  }
};

export const getGenreList = (films: Films) => {
  const collectedGenres: string[] = [];
  films.forEach((film) => collectedGenres.push(film.genre));
  const uniqueGenres = ['All genres',...new Set(collectedGenres)];
  const catalogGenres: Genres = [];
  uniqueGenres.forEach((genre, index) =>
    catalogGenres.push({id: index, name: getCatalogGenre(genre)},
    ));
  return catalogGenres;
};

export const convertRating: ConvertRating = (rating) => {
  let convertedRating = '';
  if (rating >= 0 && rating < 3) {
    convertedRating = Rating.Bad;
  } else if (rating >= 3 && rating < 5) {
    convertedRating = Rating.Normal;
  } else if (rating >= 5 && rating < 8) {
    convertedRating = Rating.Good;
  } else if (rating >= 8 && rating < 10) {
    convertedRating = Rating.VeryGood;
  } else if (rating === 10) {
    convertedRating = Rating.Awesome;
  }
  return convertedRating;
};

export const getFormattedRating = (rating: number) => {
  const filmRating = rating.toString();
  if (!filmRating.includes('.')) {
    return `${filmRating},0`;
  }
  return filmRating.replace('.', ',');
};

export const getDescription = (filmDescription: string) => {
  const sentences = filmDescription.match(/[^.?!]+[.!?]+[\])'"`’”]*|.+/g);
  if (!sentences) {
    return [];
  }
  return sentences;
};

export const filterFilms = (filmCards: Films, activeGenre: string) => {
  const filteredFilms = filmCards.filter((film) => film.genre === getActiveGenre(activeGenre));

  return activeGenre === 'All genres'? filmCards : filteredFilms;
};

export const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;

export const validateLogin = (loginData: string): boolean =>
  !!loginData.match(/^[-._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$/);

export const validatePassword = (passwordData: string): boolean => {
  if (passwordData.length && passwordData.match(/^[a-zа-яё]+$/i)) {
    return true;
  }
  return false;
};
