import { UserComment } from '../../types/types';
import Review from '../review/review';

type MovieReviewsProps = {
    movieId: number;
    reviews: UserComment[];
}
function MovieReviews ({movieId, reviews}: MovieReviewsProps): JSX.Element {
  const movieReviews: UserComment[] = [];
  reviews.forEach((review) => {
    if (Math.trunc(review.id) === movieId) {
      movieReviews.push(review);
    }
  });

  // let renderedReviewsCount = 0;

  return (
    <div className="film-card__reviews film-card__row">

      <div className="film-card__reviews-col">
        {movieReviews.slice().map((review) =>(
          <Review
            key = {review.id}
            review = {review}
          />))}
      </div>
    </div>
  );
}
export default MovieReviews;
