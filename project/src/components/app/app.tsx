import MainScreen from '../main-screen/main-screen';

type Genre = {
  href: string;
  name: string;
}

type FilmCard = {
  src: string;
  alt: string;
  title: string;
}

type AppScreenProps = {
  promoFilmTitle: string;
  promoFilmGenre: string;
  promoFilmYear: number;
  catalogGenres: Genre[];
  filmCards: FilmCard[];
  activeGenre: Genre;
}

function App({promoFilmTitle, promoFilmGenre, promoFilmYear, catalogGenres, filmCards, activeGenre}: AppScreenProps): JSX.Element {
  return (
    <MainScreen
      promoFilmTitle = {promoFilmTitle}
      promoFilmGenre = {promoFilmGenre}
      promoFilmYear = {promoFilmYear}
      catalogGenres = {catalogGenres}
      filmCards = {filmCards}
      activeGenre = {activeGenre}
    />
  );
}

export default App;
