import { useNavigate } from 'react-router-dom';
import { AppRoute, FavoriteStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeFavoriteAction } from '../../store/api-actions/api-film-actions/api-film-actions';
import { FilmInfo } from '../../types/films';
import { isAuthorized, isFavorite } from '../../utils/utils';

type MyListButtonProps = {
    favoriteFilm: FilmInfo;
}

function MyListButton({favoriteFilm}: MyListButtonProps): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {currentFavorite} = useAppSelector(({FAVORITE}) => FAVORITE);
  const {authorizationStatus} = useAppSelector(({USER}) => USER);

  const favoriteStatus = isFavorite(currentFavorite, favoriteFilm)? FavoriteStatus.NotFavorite : FavoriteStatus.Favorite;

  const handleFavoriteClick = () => {
    if (!isAuthorized(authorizationStatus)) {
      navigate(AppRoute.SignIn);
    }
    dispatch(changeFavoriteAction({
      id: favoriteFilm.id,
      status: favoriteStatus,
    }));
  };


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
