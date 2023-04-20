import { render } from '@testing-library/react';
import Home from './index';

describe('Home', () => {
  describe('Render', () => {
    test('should renders', () => {
      const container = render(<Home />);

      expect(container).toBeDefined();
    });
  });

  describe('Interaction', () => {});
});
