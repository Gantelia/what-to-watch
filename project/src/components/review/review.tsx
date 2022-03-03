import { UserComment } from '../../types/types';

type ReviewProps = {
    review: UserComment;
}

function Review ({review}: ReviewProps): JSX.Element {
  const { text, author, data, rating } = review;
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{text}</p>

        <footer className="review__details">
          <cite className="review__author">{author}</cite>
          <time className="review__date" dateTime="2016-12-24">{data}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
}
export default Review;
