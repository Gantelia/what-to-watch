
import { REVIEWS_RENDER_STEP } from '../../const';
import { UserComment } from '../../types/types';
import Review from '../review/review';

type MovieReviewsProps = {
    movieId: number;
    reviews: UserComment[];
}
function MovieReviews ({movieId, reviews}: MovieReviewsProps): JSX.Element {
  const movieReviews = reviews.filter((review) => Math.trunc(review.id) === movieId);

  const reviewBlocks = Array(Math.ceil(movieReviews.length/REVIEWS_RENDER_STEP)).fill('review');

  let renderedReviewsCount = 0;

  return (
    <div className="film-card__reviews film-card__row">
      { reviewBlocks.map(() =>(
        <div className="film-card__reviews-col" key = {renderedReviewsCount}>
          {movieReviews.slice(renderedReviewsCount, renderedReviewsCount + Math.min(REVIEWS_RENDER_STEP, movieReviews.length)).map((review) => {
            renderedReviewsCount += 1;
            return (
              <Review
                key = {review.id}
                review = {review}
              />);})}
        </div>),
      )}
    </div>
  );
}
export default MovieReviews;
