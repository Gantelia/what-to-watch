
import { REVIEWS_RENDER_STEP } from '../../const';
import { Comments } from '../../types/reviews';
import Review from '../review/review';

type MovieReviewsProps = {
    reviews: Comments;
}
function MovieReviews ({reviews}: MovieReviewsProps): JSX.Element {
  const reviewBlocks = Array(Math.ceil(reviews.length/REVIEWS_RENDER_STEP)).fill('review');

  let renderedReviewsCount = 0;


  return (
    <div className="film-card__reviews film-card__row">
      { reviewBlocks.map(() =>(
        <div className="film-card__reviews-col" key = {renderedReviewsCount}>
          {reviews.slice(renderedReviewsCount, renderedReviewsCount + Math.min(REVIEWS_RENDER_STEP, reviews.length)).map((review) => {
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
