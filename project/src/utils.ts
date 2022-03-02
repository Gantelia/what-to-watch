import { HOUR_IN_MINUTES } from './const';

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
