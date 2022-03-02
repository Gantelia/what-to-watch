import { Link } from 'react-router-dom';

type MovieCardProps = {
  src: string;
  alt: string;
  title: string;
  id: number;
}


function MovieCard({src, alt, title, id}: MovieCardProps): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={src} alt={alt} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/:${id}`}>{title}</Link>
      </h3>
    </article>
  );
}

export default MovieCard;
