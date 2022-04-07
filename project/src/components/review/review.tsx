import { Comment } from '../../types/reviews';
import dayjs from 'dayjs';

type ReviewProps = {
    review: Comment;
}

function Review ({review}: ReviewProps): JSX.Element {
  const { text, author, date, rating } = review;
  const commentDate = dayjs(date).format('MMMM DD, YYYY');
  const dateTime = dayjs(date).format('YYYY-MM-DD');


  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text" data-testid="review-text">{text}</p>

        <footer className="review__details" data-testid="review-details">
          <cite className="review__author" data-testid="review-author">{author}</cite>
          <time className="review__date" dateTime={dateTime} data-testid="review-date">{commentDate}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating.replace('.', ',')}</div>
    </div>
  );
}
export default Review;
