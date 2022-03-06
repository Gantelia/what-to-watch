import { useEffect, useRef, useState } from 'react';

type VideoPlayerProps = {
    src: string;
    poster: string;
}

function VideoPlayer({src, poster}: VideoPlayerProps): JSX.Element {
  const [, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const handleToggleMute = () => setIsMuted((current) => !current);

  const videoRef = useRef<HTMLVideoElement | null>(null);

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
  }, [src]);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    if (isPlaying) {
      setTimeout(() => videoRef.current?.play(), 1000);
      return;
    }

    videoRef.current.pause();
  },[isPlaying]);

  return (
    <>
      <i
        className={`fa fa-volume-${isMuted ? 'up' : 'mute'}`}
        onClick={handleToggleMute}
      />
      <video ref={videoRef} src={src} poster={poster} muted={isMuted}
        onClick={() => setIsPlaying(!isPlaying)}
      />
    </>
  );
}

export default VideoPlayer;
