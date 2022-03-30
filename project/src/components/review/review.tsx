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
        <p className="review__text">{text}</p>

        <footer className="review__details">
          <cite className="review__author">{author}</cite>
          <time className="review__date" dateTime={dateTime}>{commentDate}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating.replace('.', ',')}</div>
    </div>
  );
}
export default Review;
