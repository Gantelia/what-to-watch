import { FilmInfo } from '../../types/types';
import { convertRating, getFormattedRating } from '../../utils';

type MovieOverviewProps = {
  film: FilmInfo;
}

function MovieOverview ({film}: MovieOverviewProps): JSX.Element {
  const {rating, scoresCount, description, director, starring} = film;

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{getFormattedRating(rating)}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{convertRating(rating)}</span>
          <span className="film-rating__count">{scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{description}</p>

        <p className="film-card__director"><strong>Director: {director}</strong></p>

        <p className="film-card__starring">
          <strong>Starring:
            {starring.slice(0, starring.length-1).map((star) => ` ${star}, `)}
            {starring[starring.length-1]} and other
          </strong>
        </p>
      </div>
    </>
  );
}


export default MovieOverview;
