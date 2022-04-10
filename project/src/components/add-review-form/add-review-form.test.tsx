import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import HistoryRouter from '../history-route/history-route';
import AddReviewForm from './add-review-form';

const mockStore = configureMockStore();

describe('Component: AddReviewForm', () => {
  const history = createMemoryHistory();
  history.push('/films/:id/review');

  it('should render correctly', () => {
    render(
      <Provider store={mockStore({})}>
        <HistoryRouter history={history}>
          <AddReviewForm />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getAllByLabelText(/Rating/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Review text/i)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

});
