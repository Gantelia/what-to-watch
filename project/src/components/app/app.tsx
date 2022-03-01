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
import {FilmCard, Genre} from '../../types/types';

type AppScreenProps = {
  mainFilmTitle: string;
  mainFilmGenre: string;
  mainFilmYear: number;
  catalogGenres: Genre[];
  filmCards: FilmCard[];
}

function App({mainFilmTitle, mainFilmGenre, mainFilmYear, catalogGenres, filmCards}: AppScreenProps): JSX.Element {
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
              authorizationStatus={AuthorizationStatus.Auth}
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
          element={<AddReviewScreen filmCards = {filmCards}/>}
        />
        <Route
          path={AppRoute.Player}
          element={<PlayerScreen filmCards = {filmCards}/>}
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
