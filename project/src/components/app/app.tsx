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
import { useAppSelector } from '../../hooks';
import LoadingScreen from '../../pages/loading - screen/loading-screen';

function App(): JSX.Element {
  const {isDataLoaded, films} = useAppSelector((state) => state);

  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <MainScreen
              promoFilm = {films[0]}
              filmCards = {films}
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
              <MyListScreen filmCards={films} />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Film}
          element={<MovieScreen films={films}/>}
        />
        <Route
          path={AppRoute.AddReview}
          element={
            <AddReviewScreen
              filmCards={films}
              onFormSubmit={() => {
                throw new Error('Function \'onFormSubmit\' isn\'t implemented.');
              }}
            />
          }
        />
        <Route
          path={AppRoute.Player}
          element={<PlayerScreen filmCards={films}/>}
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
