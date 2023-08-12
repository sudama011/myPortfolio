import { render, screen } from '@testing-library/react';
import App from './App';

test('renders home link', () => {
  render(<App />);
  const homeButton = screen.getByText(/Home/i);
  expect(homeButton).toBeInTheDocument();
});


test('renders about link', () => {
  render(<App />);
  const aboutButton = screen.getByText(/About/i);
  expect(aboutButton).toBeInTheDocument();
}
);

test('renders contact link', () => {

  render(<App />);
  const contactButton = screen.getByText(/Contact/i);
  expect(contactButton).toBeInTheDocument();
}
);