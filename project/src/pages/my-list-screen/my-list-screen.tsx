import MovieCard from '../../components/movie-card/movie-card';
import Logo from '../../components/logo/logo';

type FilmCard = {
  src: string;
  alt: string;
  title: string;
}

type MyListScreenProps = {
  filmCards: FilmCard[];
}

function MyListScreen({filmCards}: MyListScreenProps): JSX.Element {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">My list</h1>

        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </li>
          <li className="user-block__item">
            <a className="user-block__link">Sign out</a>
          </li>
        </ul>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          {
            filmCards.map((card) =>(
              <MovieCard
                key = {card.title}
                src = {card.src}
                alt = {card.alt}
                title = {card.title}
              />),
            )
          }
        </div>
      </section>

      <footer className="page-footer">
        <Logo isFooterLogo />
      </footer>
    </div>
  );
}

export default MyListScreen;
