import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { LandingPage } from './index';

// Mock all image imports
jest.mock('../../../assets/pie-chart.png', () => 'pie-chart-mock');
jest.mock('../../../assets/line-graph.png', () => 'line-graph-mock');
jest.mock('../../../assets/bar-graph.png', () => 'bar-graph-mock');
jest.mock('../../../assets/paper-stack.jpg', () => 'paper-stack-mock');

// Mock window.scrollTo
const mockScrollTo = jest.fn();
Object.defineProperty(window, 'scrollTo', { value: mockScrollTo });

// Mock window.open
const mockOpen = jest.fn();
Object.defineProperty(window, 'open', { value: mockOpen });

// Wrapper component for Router context
const renderWithRouter = ui => {
  return render(ui, { wrapper: BrowserRouter });
};

describe('LandingPage', () => {
  beforeEach(() => {
    // Clear mock function calls before each test
    mockScrollTo.mockClear();
    mockOpen.mockClear();
  });

  describe('scrollToTop function', () => {
    test('should call window.scrollTo with smooth behavior when supported', () => {
      renderWithRouter(<LandingPage />);

      // Find and click the "Back to Top" button
      const backToTopButton = screen.getByText(/back to top/i);
      fireEvent.click(backToTopButton);

      // Check if scrollTo was called with the correct parameters
      expect(mockScrollTo).toHaveBeenCalledWith({
        top: 0,
        behavior: 'smooth',
      });
    });
  });

  describe('handleReadMore function', () => {
    test('should open Human Rights First website in new tab', () => {
      renderWithRouter(<LandingPage />);

      // Find and click the "Read More" button
      const readMoreButton = screen.getByText(/read more/i);
      fireEvent.click(readMoreButton);

      // Check if window.open was called with the correct URL and parameters
      expect(mockOpen).toHaveBeenCalledWith('https://www.humanrightsfirst.org', '_blank');
    });
  });
});
