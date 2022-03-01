export type FilmCard = {
    previewImage: string;
    name: string;
    id: number;
  }

export type Genre = {
    id: number;
    name: string;
  }

export type FilmInfo = {
id: number;
name: string;
posterImage: string;
previewImage: string;
backgroundImage: string;
backgroundColor: string;
videoLink: string;
previewVideoLink: string;
description: string;
rating: number;
scoresCount: number;
director: string;
starring: string[];
runTime: number;
genre: string;
released: number;
isFavorite: boolean;
}

