import { Link } from 'react-router-dom';
import Logo from '../../components/logo/logo';
import SignOut from '../../components/sign-out/sign-out';

const RATINGS: string[] = ['10', '9', '8', '7', '6', '5', '4', '3', '2', '1'];

type AddReviewScreenProps = {
  checkedRating: string;
}

function AddReviewScreen({checkedRating}: AddReviewScreenProps): JSX.Element {
  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to="film-page.html" className="breadcrumbs__link">The Grand Budapest Hotel</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link to="#todo" className="breadcrumbs__link">Add review</Link>
              </li>
            </ul>
          </nav>

          <SignOut />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <form action="#" className="add-review__form">
          <div className="rating">
            <div className="rating__stars">
              {
                RATINGS.map((rating) => (
                  <>
                    <input className="rating__input" id={`star-${rating}`} type="radio" name="rating" value={rating} {...rating === checkedRating ? 'checked' : ''}/>
                    <label className="rating__label" htmlFor={`star-${rating}`}>Rating {rating}</label>
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
