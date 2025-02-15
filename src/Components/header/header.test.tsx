import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { Header } from './header';
import type { RecipesCategoriesAPI } from '@/data/types';
import { useCategoriesCntxt } from '@/Context/useCategoriesCntxt';

const categoriesMock: RecipesCategoriesAPI[] = [
  {
    name: 'Ice Creams',
    id: 'iceCreams',
    imgLink: 'https://img.com',
  },
];
const mockContext = {
  categories: categoriesMock,
  isLoading: false,
};
jest.mock('@/Context/useCategoriesCntxt');
(useCategoriesCntxt as jest.MockedFunction<typeof useCategoriesCntxt>).mockReturnValue(mockContext);

it('shows navigation menu when icon is clicked', async () => {
  const user = userEvent.setup();

  render(<Header />);
  const menuIcon = screen.getByLabelText('Navigation menu');

  expect(menuIcon).toBeInTheDocument();
  expect(menuIcon).toHaveAttribute('aria-expanded', 'false');

  await user.click(menuIcon);

  expect(useCategoriesCntxt).toHaveBeenCalled();
  expect(menuIcon).toHaveAttribute('aria-expanded', 'true');
});

it('shows submenu when clicking on submenu', async () => {
  const user = userEvent.setup();

  render(<Header />);

  const subMenu = screen.getByRole('link', { expanded: false });
  await user.click(subMenu);

  expect(subMenu).toHaveAttribute('aria-expanded', 'true');
});

it('hides menu when pressing Esc', async () => {
  const user = userEvent.setup();

  render(<Header />);

  const subMenu = screen.getByRole('link', { expanded: false });
  await user.click(subMenu);
  expect(subMenu).toHaveAttribute('aria-expanded', 'true');

  await user.keyboard('[Escape]');
  expect(subMenu).toHaveAttribute('aria-expanded', 'false');
});
