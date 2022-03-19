import { FilmInfo } from '../../types/films';
import VideoPlayer from '../video-player/video-player';


type MovieCardProps = {
  film: FilmInfo;
  activePlayer: number | null;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}


function MovieCard({film, activePlayer, onMouseEnter, onMouseLeave}: MovieCardProps): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card">
      <VideoPlayer
        film={film}
        activePlayer={activePlayer}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
    </article>
  );
}

export default MovieCard;
