import { Link } from 'react-router-dom';
import { AppRoute, FavoriteStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeFavoriteAction } from '../../store/api-actions/api-film-actions';
import { FilmInfo } from '../../types/films';
import { isAuthorized, isFavorite } from '../../utils';
/*eslint-disable*/
type MyListButtonProps = {
    favoriteFilm: FilmInfo;
}

function MyListButton({favoriteFilm}: MyListButtonProps): JSX.Element {
  const dispatch = useAppDispatch();

  const {currentFavorite} = useAppSelector(({FAVORITE}) => FAVORITE);
  const {authorizationStatus} = useAppSelector(({USER}) => USER);

  const getFavoriteStatus = () => {
    if (isFavorite(currentFavorite, favoriteFilm)) {
      return currentFavorite?.isFavorite? FavoriteStatus.NotFavorite : FavoriteStatus.Favorite;
    }
    return favoriteFilm.isFavorite? FavoriteStatus.NotFavorite : FavoriteStatus.Favorite;
  };

  const handleFavoriteClick = () => {
    dispatch(changeFavoriteAction({
      id: favoriteFilm.id,
      status: getFavoriteStatus(),
    }));
  };

  if (!isAuthorized(authorizationStatus)) {
    return (
      <Link to={AppRoute.SignIn}>
        <button className="btn btn--list film-card__button" type="button">
          <svg viewBox="0 0 19 20" width="19" height="20">
            <use xlinkHref="#add"></use>
          </svg>
          <span>My list</span>
        </button>
      </Link>
    );
  }

  return (
    <button className="btn btn--list film-card__button" type="button"
      onClick={handleFavoriteClick}
    >
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref={`${isFavorite(currentFavorite, favoriteFilm)? '#in-list' : '#add'}`}></use>
      </svg>
      <span>My list</span>
    </button>
  );
}

export default MyListButton;
