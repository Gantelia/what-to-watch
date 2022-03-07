import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FilmInfo } from '../../types/types';

type VideoPlayerProps = {
    film: FilmInfo
    activePlayer: number | null;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

function VideoPlayer({film, activePlayer, onMouseEnter, onMouseLeave}: VideoPlayerProps): JSX.Element {
  const [/*isLoading*/, setIsLoading] = useState(true);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const {previewVideoLink, previewImage, id, name} = film;

  useEffect(() => {
    if (videoRef.current !== null) {
      videoRef.current.onloadeddata = () => setIsLoading(false);
    }

    return () => {
      if (videoRef.current !== null) {
        videoRef.current.onloadeddata = null;
        videoRef.current = null;
      }
    };
  }, [previewVideoLink]);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    let videoTimer: NodeJS.Timeout;

    if (id === activePlayer) {
      videoTimer = setTimeout(() => videoRef.current?.play(), 1000);
      return;
    }
    videoRef.current.pause();
    videoRef.current.load();

    return () => {
      clearTimeout(videoTimer);
    };
  },[id, activePlayer]);

  // if (isLoading) {
  //   return <div>Loading</div>;
  // }

  return (
    <>
      <video ref={videoRef} src={previewVideoLink} poster={previewImage} muted
        width="280" height="175"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/:${id}`}>{name}
        </Link>
      </h3>
    </>
  );
}

export default VideoPlayer;

