import { render, screen } from '@testing-library/react';
import { makeFakeComments } from '../../utils/mocks';
import Review from './review';

describe('Component: Review', () => {
  it('should render correctly', () => {
    const fakeReview = makeFakeComments()[4];

    render(<Review review={fakeReview} />);

    expect(screen.getByTestId('review-text')).toBeInTheDocument();
    expect(screen.getByTestId('review-details')).toBeInTheDocument();
    expect(screen.getByTestId('review-author')).toBeInTheDocument();
    expect(screen.getByTestId('review-date')).toBeInTheDocument();
    expect(screen.getByTestId('review-rating')).toBeInTheDocument();
  });
});
