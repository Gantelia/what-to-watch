import { useAppDispatch } from '../../hooks';
import { getMovieToPlay } from '../../store/api-actions/favorite-process/favorite-process';
import { FilmInfo } from '../../types/films';

type PlayButtonProps = {
    movieToPlay: FilmInfo;
}

function PlayButton({movieToPlay}: PlayButtonProps): JSX.Element {
  const dispatch = useAppDispatch();

  const handlePlayClick = () => {
    dispatch(getMovieToPlay(movieToPlay));
  };

  return (
    <button className="btn btn--play film-card__button" type="button"
      onClick={handlePlayClick}
    >
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"></use>
      </svg>
      <span>Play</span>
    </button>
  );
}

export default PlayButton;
