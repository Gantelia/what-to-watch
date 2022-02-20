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
  mainFilmTitle: string;
  mainFilmGenre: string;
  mainFilmYear: number;
  catalogGenres: Genre[];
  filmCards: FilmCard[];
  activeGenre: Genre;
}

function App({mainFilmTitle, mainFilmGenre, mainFilmYear, catalogGenres, filmCards, activeGenre}: AppScreenProps): JSX.Element {
  return (
    <MainScreen
      mainFilmTitle = {mainFilmTitle}
      mainFilmGenre = {mainFilmGenre}
      mainFilmYear = {mainFilmYear}
      catalogGenres = {catalogGenres}
      filmCards = {filmCards}
      activeGenre = {activeGenre}
    />
  );
}

export default App;
