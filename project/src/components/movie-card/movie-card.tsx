import {Link} from 'react-router-dom';
import { FilmInfo } from '../../types/types';
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
      <Link to={`/films/:${film.id}`} >
        <VideoPlayer
          film={film}
          activePlayer={activePlayer}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      </Link>
    </article>
  );
}

export default MovieCard;
