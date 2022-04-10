import { render, screen } from '@testing-library/react';
import { makeFakeComment } from '../../utils/mocks';
import Review from './review';

describe('Component: Review', () => {
  it('should render correctly', () => {
    const fakeReview = makeFakeComment();

    render(<Review review={fakeReview} />);

    expect(screen.getByTestId('review-text')).toBeInTheDocument();
    expect(screen.getByTestId('review-details')).toBeInTheDocument();
    expect(screen.getByTestId('review-author')).toBeInTheDocument();
    expect(screen.getByTestId('review-date')).toBeInTheDocument();
    expect(screen.getByTestId('review-rating')).toBeInTheDocument();
  });
});
