import {Route, Routes} from 'react-router-dom';

import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import { AppRoute } from '../../const';
import HistoryRouter from '../history-route/history-route';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import MainScreen from '../../pages/main-screen/main-screen';
import MovieScreen from '../../pages/movie-screen/movie-screen';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import PrivateRoute from '../privateRoute/private-route';
import SignInScreen from '../../pages/sign-in-screen/sign-in-screen';
import browserHistory from '../../browser-history';
import { isCheckedAuth } from '../../utils/utils';
import { useAppSelector } from '../../hooks';

function App(): JSX.Element {
  const {isDataLoaded, promo} = useAppSelector(({CATALOG}) => CATALOG);
  const {authorizationStatus} = useAppSelector(({USER}) => USER);

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded || !promo) {
    return (
      <LoadingScreen />
    );
  }


  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <MainScreen />
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
            <PrivateRoute >
              <MyListScreen />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Film}
          element={<MovieScreen />}
        />
        <Route
          path={AppRoute.AddReview}
          element={
            <PrivateRoute >
              <AddReviewScreen />
            </PrivateRoute>
          }
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
    </HistoryRouter>
  );
}

export default App;
