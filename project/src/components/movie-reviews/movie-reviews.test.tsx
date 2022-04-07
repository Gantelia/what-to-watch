import { render, screen } from '@testing-library/react';
import { makeFakeComments } from '../../utils/mocks';
import MovieReviews from './movie-reviews';

describe('Component: MovieReviews', () => {
  it('should render correctly', () => {
    const fakeReviews = makeFakeComments();

    render(<MovieReviews reviews={fakeReviews} />);

    expect(screen.getByTestId('film-card__row')).toBeInTheDocument();
    // expect(screen.getByTestId('reviews-col')).toBeInTheDocument();
    // expect(screen.getAllByTestId('review')).toBeInTheDocument();
  });
});
