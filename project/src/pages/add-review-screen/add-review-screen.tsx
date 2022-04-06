import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import AddReviewForm from '../../components/add-review-form/add-review-form';
import Logo from '../../components/logo/logo';
import SignInOut from '../../components/sign-in-out/sign-in-out';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFilmAction } from '../../store/api-actions/api-film-actions';

import LoadingScreen from '../loading - screen/loading-screen';

function AddReviewScreen(): JSX.Element {
  const {id} = useParams();
  const filmId = Number(id);

  const dispatch = useAppDispatch();

  const {film} = useAppSelector(({FILM}) => FILM);

  useEffect(() => {
    if (film === null || film.id !== filmId) {
      dispatch(fetchFilmAction(filmId));
    }
  }, [filmId, film, dispatch]);

  if (!film) {
    return <LoadingScreen />;
  }

  const {backgroundImage, name, posterImage} = film;


  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${filmId}`} className="breadcrumbs__link">{name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link to={`/films/${filmId}/review`} className="breadcrumbs__link">Add review</Link>
              </li>
            </ul>
          </nav>

          <SignInOut />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={posterImage} alt={name} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <AddReviewForm />
      </div>

    </section>
  );
}
export default AddReviewScreen;
