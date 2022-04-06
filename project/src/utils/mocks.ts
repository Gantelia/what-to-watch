import dayjs from 'dayjs';
import { datatype, internet, lorem, music, name, random, system, date, image } from 'faker';
import { FilmInfo } from '../types/films';
import { Comment } from '../types/reviews';
import { UserData } from '../types/user-data';

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
  isFavorite: random.boolean(),
});

export const makeFakeFilms = (): FilmInfo[] => new Array(5).fill(makeFakeFilm());

export const makeFakeComments = (): Comment[] => (
  Array(7).fill({
    id: datatype.number(),
    author: `${name.firstName()} ${name.lastName()}`,
    date: dayjs(date.between('1980-01-01T00:00:00.000Z', '2030-01-01T00:00:00.000Z')).format('MMMM DD, YYYY'),
    rating: random.number({ min: 1, max: 10, precision: 0.1 }).toString().replace('.', ','),
    text: lorem.paragraph(),
    userId: datatype.number(),
  }));

export const makeFakeUserData = (): UserData => ({
  avatarUrl: image.avatar(),
  email: internet.email(),
  id: datatype.number(),
  name: `${name.firstName()} ${name.lastName()}`,
  token: datatype.uuid(),
});
