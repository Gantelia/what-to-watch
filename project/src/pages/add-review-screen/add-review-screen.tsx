import {Link, Navigate, useParams} from 'react-router-dom';
import AddReviewForm from '../../components/add-review-form/add-review-form';
import Logo from '../../components/logo/logo';
import Sign from '../../components/sign/sign';
import { AppRoute } from '../../const';
import {FilmInfo, UserReview} from '../../types/types';


type AddReviewScreenProps = {
  filmCards: FilmInfo[];
  onFormSubmit: (formData:UserReview) => void;
}

function AddReviewScreen({filmCards, onFormSubmit}: AddReviewScreenProps): JSX.Element {
  const {id} = useParams();
  const filmCard = filmCards.find((film: FilmInfo) => `:${film.id}` === id);

  if (!filmCard) {
    return <Navigate to={AppRoute.NotFound}/>;
  }

  const {backgroundImage, name, posterImage} = filmCard;

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
                <Link to={`/films/${id}`} className="breadcrumbs__link">{name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link to={`/films/${id}/review`} className="breadcrumbs__link">Add review</Link>
              </li>
            </ul>
          </nav>

          <Sign />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={posterImage} alt={name} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <AddReviewForm onFormSubmit={onFormSubmit}/>
      </div>

    </section>
  );
}
export default AddReviewScreen;
