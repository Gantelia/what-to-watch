import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { AppRoute, FilmsCount } from '../../const';
import { makeFakeFilms } from '../../utils/mocks';
import HistoryRouter from '../history-route/history-route';
import FilmList from './film-list';

describe('Component: FilmList', () => {
  const history = createMemoryHistory();
  history.push(AppRoute.Main);

  const fakeFilmCards = makeFakeFilms();
  const fakeFilmsCount = FilmsCount.MovieScreen;

  it('should render correctly', () => {
    render(
      <HistoryRouter history={history}>
        <FilmList
          filmCards={fakeFilmCards}
          filmsCount={fakeFilmsCount}
        />
      </HistoryRouter>,
    );

    expect(screen.getByRole('div')).toBeInTheDocument();
  });
});
