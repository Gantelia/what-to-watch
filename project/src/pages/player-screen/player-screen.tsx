import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFilmAction } from '../../store/api-actions/api-film-actions/api-film-actions';
import { getFormattedTimeLeft } from '../../utils';
import LoadingScreen from '../loading-screen/loading-screen';

function PlayerScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {id} = useParams();
  const {film} = useAppSelector(({FILM}) => FILM);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [filmRunTime, setFilmRunTime] = useState(0);
  const [secondsWatched, setSecondsWatched] = useState(0);
  const [filmProgress, setFilmProgress] = useState(0);
  const [timeLeft, setTimeLeft] = useState(videoRef.current?.duration);

  useEffect(() => {
    if (!film || film.id !== Number(id)) {
      dispatch(fetchFilmAction(Number(id)));
    }

  }, [dispatch, id, film]);


  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    if (isPlaying) {
      videoRef.current.play();
      return;
    }

    videoRef.current.pause();
  }, [isPlaying]);


  if (!film) {
    return <LoadingScreen />;
  }

  const {videoLink, backgroundImage} = film;

  const handleFullScreenClick = () => {
    if (!videoRef.current) {
      return;
    }

    videoRef.current.requestFullscreen();
  };

  if (isLoading) {
    <LoadingScreen />;
  }

  const handleWatchTimeUpdate = () => {
    if (!videoRef.current) {
      return;
    }

    setSecondsWatched(videoRef.current.currentTime);
    setFilmRunTime(videoRef.current.duration);

    const secondsLeft = Math.floor(filmRunTime - secondsWatched);
    setTimeLeft(secondsLeft);

    const videoProgress = (secondsWatched / filmRunTime) * 100;
    setFilmProgress(videoProgress);
  };


  return (
    <div className="player">
      <video
        ref={videoRef}
        src={videoLink}
        className="player__video"
        poster={backgroundImage}
        onCanPlay={() => setIsLoading(false)}
        onTimeUpdate={handleWatchTimeUpdate}
      >
      </video>

      <button type="button" className="player__exit"
        onClick={() => navigate(`/films/${Number(id)}`)}
      >Exit
      </button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={filmProgress} max="100"></progress>
            <div className="player__toggler" style={{left: `${filmProgress}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{timeLeft? getFormattedTimeLeft(timeLeft) : '00:00'}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            <svg viewBox={`${isPlaying? '0 0 19 19' : '0 0 14 21'}`}
              width={`${isPlaying? '19' : '14'}`}
              height={`${isPlaying? '19' : '21'}`}
            >
              <use xlinkHref={`${isPlaying? '#pause' : '#play-s'}`}></use>
            </svg>
            <span >{isPlaying ? 'Pause' : 'Play'}</span>
          </button>
          <div className="player__name">Transpotting</div>

          <button type="button"
            className="player__full-screen"
            onClick={handleFullScreenClick}
          >
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlayerScreen;
