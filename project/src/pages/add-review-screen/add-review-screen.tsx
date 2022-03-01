import {Link, useParams} from 'react-router-dom';
import Logo from '../../components/logo/logo';
import SignOut from '../../components/sign-out/sign-out';
import {RATINGS} from '../../const';
import {FilmInfo} from '../../types/types';


type AddReviewScreenProps = {
  filmCards: FilmInfo[];
}

function AddReviewScreen({filmCards}: AddReviewScreenProps): JSX.Element {
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

          <SignOut />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={filmCard?.posterImage} alt={filmCard?.name} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <form action="#" className="add-review__form">
          <div className="rating">
            <div className="rating__stars">
              {
                RATINGS.map((rating) => (
                  <>
                    <input key={`rating${rating}`} className="rating__input" id={`star-${rating}`} type="radio" name="rating" value={rating} />
                    <label key={rating} className="rating__label" htmlFor={`star-${rating}`}>Rating {rating}</label>
                  </>
                ))
              }
            </div>
          </div>

          <div className="add-review__text">
            <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"></textarea>
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit">Post</button>
            </div>

          </div>
        </form>
      </div>

    </section>
  );
}
export default AddReviewScreen;
