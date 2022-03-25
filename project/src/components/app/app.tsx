import MainScreen from '../../pages/main-screen/main-screen';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute} from '../../const';
import SignInScreen from '../../pages/sign-in-screen/sign-in-screen';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import MovieScreen from '../../pages/movie-screen/movie-screen';
import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../privateRoute/private-route';
// import { useAppSelector } from '../../hooks';
// import LoadingScreen from '../../pages/loading - screen/loading-screen';
// import { isCheckedAuth } from '../../utils';
/*eslint-disable*/
function App(): JSX.Element {
  // const {authorizationStatus, isDataLoaded, promo} = useAppSelector((state) => state);

  // if (isCheckedAuth(authorizationStatus) || !isDataLoaded || !promo) {
  //   return (
  //     <LoadingScreen />
  //   );
  // }

  return (
    <BrowserRouter>
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
              <AddReviewScreen
                onFormSubmit={() => {
                  throw new Error('Function \'onFormSubmit\' isn\'t implemented.');
                }}
              />
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
    </BrowserRouter>
  );
}

export default App;
