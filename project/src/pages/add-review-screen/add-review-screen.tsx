import {Link, useParams} from 'react-router-dom';
import AddReviewForm from '../../components/add-review-form/add-review-form';
import Logo from '../../components/logo/logo';
import Sign from '../../components/sign/sign';
import {FilmInfo, UserReview} from '../../types/types';


type AddReviewScreenProps = {
  filmCards: FilmInfo[];
  onFormSubmit: (formData:UserReview) => void;
}

function AddReviewScreen({filmCards, onFormSubmit}: AddReviewScreenProps): JSX.Element {
  const {id} = useParams();
  const filmCard = filmCards.find((film: FilmInfo) => `:${film.id}` === id);

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={filmCard?.backgroundImage} alt={filmCard?.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to="film-page.html" className="breadcrumbs__link">{filmCard?.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link to="#todo" className="breadcrumbs__link">Add review</Link>
              </li>
            </ul>
          </nav>

          <Sign />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={filmCard?.posterImage} alt={filmCard?.name} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <AddReviewForm onFormSubmit={onFormSubmit}/>
      </div>

    </section>
  );
}
export default AddReviewScreen;
