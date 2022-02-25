import MovieCard from '../../components/movie-card/movie-card';
import Logo from '../../components/logo/logo';
import SignOut from '../../components/sign-out/sign-out';

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

        <SignOut />
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
