import MainScreen from '../../pages/main-screen/main-screen';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import SignInScreen from '../../pages/sign-in-screen/sign-in-screen';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import MovieScreen from '../../pages/movie-screen/movie-screen';
import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../privateRoute/private-route';

type Genre = {
  href: string;
  name: string;
}

type FilmCard = {
  src: string;
  alt: string;
  title: string;
  id: number;
}

type AppScreenProps = {
  mainFilmTitle: string;
  mainFilmGenre: string;
  mainFilmYear: number;
  catalogGenres: Genre[];
  filmCards: FilmCard[];
  activeGenre: Genre;
}

function App({mainFilmTitle, mainFilmGenre, mainFilmYear, catalogGenres, filmCards, activeGenre}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <MainScreen
              mainFilmTitle = {mainFilmTitle}
              mainFilmGenre = {mainFilmGenre}
              mainFilmYear = {mainFilmYear}
              catalogGenres = {catalogGenres}
              filmCards = {filmCards}
              activeGenre = {activeGenre}
            />
          }
        />
        <Route
          path={AppRoute.SignIn}
          element={
            <SignInScreen />
          }
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <MyListScreen filmCards = {filmCards} />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Film}
          element={<MovieScreen />}
        />
        <Route
          path={AppRoute.AddReview}
          element={<AddReviewScreen checkedRating='5'/>}
        />
        <Route
          path={AppRoute.Player}
          element={<PlayerScreen />}
        />
        <Route
          path={AppRoute.NotFound}
          element={<NotFoundScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
