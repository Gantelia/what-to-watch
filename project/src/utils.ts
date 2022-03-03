import { HOUR_IN_MINUTES, Rating } from './const';
import { ConvertRating } from './types/types';

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

export const convertRating: ConvertRating = (rating) => {
  let convertedRating = '';
  if (rating >= 0 && rating < 3) {
    convertedRating = Rating.Bad;
  } else if (rating >= 3 && rating < 5) {
    convertedRating = Rating.NORMAL;
  } else if (rating >= 5 && rating < 8) {
    convertedRating = Rating.GOOD;
  } else if (rating >= 8 && rating < 10) {
    convertedRating = Rating.VERY_GOOD;
  } else if (rating === 10) {
    convertedRating = Rating.AWESOME;
  }
  return convertedRating;
};

export const getFormattedRating = (rating: number) => {
  const filmRating = rating.toString();
  let formattedRating = '';
  if (!filmRating.includes('.')) {
    return formattedRating;
  }
  return formattedRating = filmRating.replace('.', ',');
};
