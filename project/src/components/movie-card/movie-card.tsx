import { Link } from 'react-router-dom';

type MovieCardProps = {
  src: string;
  alt: string;
  title: string;
}


function MovieCard({src, alt, title}: MovieCardProps): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={src} alt={alt} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to="film-page.html">{title}</Link>
      </h3>
    </article>
  );
}

export default MovieCard;
