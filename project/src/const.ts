export const RATINGS = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

export const HOUR_IN_MINUTES = 60;

export const REVIEWS_RENDER_STEP = 3;

export const FILMS_RENDER_STEP = 8;

export const MIN_REVIEW_LENGTH = 50;

export const MAX_REVIEW_LENGTH = 400;

export const HEX_COLOR = '#d96666';

export const BACKEND_URL = 'https://9.react.pages.academy/wtw';

export const REQUEST_TIMEOUT = 5000;

export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
  NotFound = '*',
}

export enum AuthorizationStatus {
    Auth = 'AUTH',
    NoAuth = 'NO_AUTH',
    Unknown = 'UNKNOWN',
}

export enum Rating {
  Bad = 'Bad',
  Normal = 'Normal',
  Good = 'Good',
  VeryGood = 'Very Good',
  Awesome = 'Awesome',
}

export enum FilmsCount {
  MainScreen = 8,
  MovieScreen = 4,
}

export enum APIRoute {
  Films = '/films',
  Promo = '/promo',
  Favorite = '/favorite',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
}

export enum HTTP_CODE {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
}

export enum NameSpace {
  catalog = 'CATALOG',
  film = 'FILM',
  user = 'USER',
  errors = 'ERRORS',
  favorite = 'FAVORITE',
}
