import LoadingScreen from './loading-screen';
import {render, screen} from '@testing-library/react';


describe('Component: LoadingScreen', () => {
  it('should render correctly', () => {
    render(<LoadingScreen />);

    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
    expect(screen.getByAltText(/preloader/i)).toBeInTheDocument();
  });
});
