import {Link} from 'react-router-dom';
import {useState} from 'react';

type MovieCardProps = {
  previewImage: string;
  name: string;
  id: number;
}


function MovieCard({previewImage, name, id}: MovieCardProps): JSX.Element {
  const [, setIsHovered] = useState<null | number>(null);

  const handleMouseEnter = () => {
    setIsHovered(id);
  };
  const handleMouseLeave = () => {
    setIsHovered(null);
  };

  return (
    <article className="small-film-card catalog__films-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="small-film-card__image">
        <img src={previewImage} alt={name} width="280" height="175"/>
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/:${id}`}>{name}
        </Link>
      </h3>
    </article>
  );
}

export default MovieCard;
