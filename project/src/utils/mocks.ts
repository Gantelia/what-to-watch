import { Comment, UserReview } from '../types/reviews';
import { datatype, date, image, internet, lorem, music, name, system } from 'faker';

import { FilmInfo } from '../types/films';
import { UserData } from '../types/user-data';
import dayjs from 'dayjs';

export const makeFakeFilm = (): FilmInfo => ({
  id: datatype.number(),
  name: name.title(),
  posterImage: system.filePath(),
  previewImage: system.filePath(),
  backgroundImage: system.filePath(),
  backgroundColor: internet.color(),
  videoLink: system.filePath(),
  previewVideoLink: system.filePath(),
  description: lorem.paragraph(),
  rating: datatype.number(),
  scoresCount: datatype.number(),
  director: `${name.firstName()} ${name.lastName()}`,
  starring: new Array(4).fill(`${name.firstName()} ${name.lastName()}`),
  runTime: datatype.number(),
  genre: music.genre(),
  released: datatype.number({ min: 1930, max: 2022}),
  isFavorite: datatype.boolean(),
});

export const makeFakeFilms = (): FilmInfo[] => new Array(5).fill(null).map(() => makeFakeFilm());

export const makeFakeUserData = (): UserData => ({
  avatarUrl: image.avatar(),
  email: internet.email(),
  id: datatype.number(),
  name: `${name.firstName()} ${name.lastName()}`,
  token: datatype.uuid(),
});

export const makeFakeUserReview = ():UserReview => ({
  rating: datatype.number({ min: 1, max: 10}),
  comment: lorem.paragraph(),
});

export const makeFakeComment = (): Comment => (
  {
    id: datatype.number(),
    author: `${name.firstName()} ${name.lastName()}`,
    date: dayjs(date.between('1980-01-01T00:00:00.000Z', '2030-01-01T00:00:00.000Z')).format('MMMM DD, YYYY'),
    rating: datatype.number({ min: 1, max: 10, precision: 0.1 }).toString().replace('.', ','),
    text: lorem.paragraph(),
    userId: datatype.number(),
  }
);

export const makeFakeComments = (): Comment[] =>
  Array(4).fill(null).map(() => makeFakeComment());

