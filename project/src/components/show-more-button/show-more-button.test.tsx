import {render, screen} from '@testing-library/react';
import ShowMoreButton from './show-more-button';

describe('Component: ShowMoreButton', () => {
  it('should render correctly', () => {
    render(<ShowMoreButton onButtonClick={jest.fn()}/>);

    expect(screen.getByText(/Show more/i)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
