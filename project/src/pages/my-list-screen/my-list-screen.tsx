
import { useEffect } from 'react';
import FilmList from '../../components/film-list/film-list';
import Logo from '../../components/logo/logo';
import SignInOut from '../../components/sign-in-out/sign-in-out';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFavoriteAction } from '../../store/api-actions/api-film-actions';
import LoadingScreen from '../loading - screen/loading-screen';

function MyListScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const {favorite} = useAppSelector(({FAVORITE}) => FAVORITE);

  useEffect(() => {
    dispatch(fetchFavoriteAction());
  }, [dispatch]);

  if (favorite === null) {
    return <LoadingScreen />;
  }

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">My list</h1>

        <SignInOut />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <div className="catalog__films-list">
          {
            <FilmList
              filmCards={favorite}
              filmsCount={favorite.length}
            />
          }
        </div>
      </section>

      <footer className="page-footer">
        <Logo isFooterLogo />
      </footer>
    </div>
  );
}

export default MyListScreen;
