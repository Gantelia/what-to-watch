import { FilmInfo } from '../../types/films';
import { convertRating, getDescription, getFormattedRating } from '../../utils';

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
        {
          getDescription(description).map((sentence) => <p key={sentence}>{sentence}</p>)
        }

        <p className="film-card__director"><strong>Director: {director}</strong></p>

        <p className="film-card__starring">
          <strong>Starring:
            {starring.join(',')} and other
          </strong>
        </p>
      </div>
    </>
  );
}


export default MovieOverview;
