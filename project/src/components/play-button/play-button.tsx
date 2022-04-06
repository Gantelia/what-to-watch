import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { getFilm } from '../../store/film-process/film-process';
import { FilmInfo } from '../../types/films';

type PlayButtonProps = {
    movieToPlay: FilmInfo;
}

function PlayButton({movieToPlay}: PlayButtonProps): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handlePlayClick = () => {
    dispatch(getFilm(movieToPlay));
    navigate(`/player/${movieToPlay.id}`);
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
