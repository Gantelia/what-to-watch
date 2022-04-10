import { render, screen } from '@testing-library/react';

import MovieReviews from './movie-reviews';
import { makeFakeComments } from '../../utils/mocks';

describe('Component: MovieReviews', () => {
  it('should render correctly', () => {
    const fakeReviews = makeFakeComments();

    render(<MovieReviews reviews={fakeReviews} />);

    expect(screen.getByTestId('film-card__row')).toBeInTheDocument();
    expect(screen.getAllByTestId('review')).toHaveLength(4);
  });
});
