import { render, screen } from '@testing-library/react';

import AddReviewForm from './add-review-form';
import HistoryRouter from '../history-route/history-route';
import { NameSpace } from '../../const';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createMemoryHistory } from 'history';

const mockStore = configureMockStore();

describe('Component: AddReviewForm', () => {
  const history = createMemoryHistory();
  history.push('/films/:id/review');

  it('should render correctly', () => {
    render(
      <Provider store={mockStore({[NameSpace.Errors]: {error: ''}})}>
        <HistoryRouter history={history}>
          <AddReviewForm />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
