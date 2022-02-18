import MainScreen from '../main-screen/main-screen';

type Genre = {
  href: string;
  name: string;
}

type AppScreenProps = {
  promoFilmTitle: string;
  promoFilmGenre: string;
  promoFilmYear: number;
  catalogGenres: Genre[];
}

function App({promoFilmTitle, promoFilmGenre, promoFilmYear, catalogGenres}: AppScreenProps): JSX.Element {
  return (
    <MainScreen
      promoFilmTitle = {promoFilmTitle}
      promoFilmGenre = {promoFilmGenre}
      promoFilmYear = {promoFilmYear}
      catalogGenres = {catalogGenres}
    />
  );
}

export default App;
