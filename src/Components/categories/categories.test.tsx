import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { Categories } from './categories';
import type { RecipesCategoriesAPI } from '@/data/types';
import { createUrl } from '@/utils/createUrl/createUrl';
import { useCategoriesCntxt } from '@/Context/useCategoriesCntxt';

jest.mock('@/utils/createUrl/createUrl');
jest.mock('@/Context/useCategoriesCntxt');

const categoriesMock: RecipesCategoriesAPI[] = [
  {
    name: 'Ice Creams',
    id: 'iceCreams',
    imgLink: 'https://img.com',
  },
];

(createUrl as jest.Mock).mockReturnValue('#');

describe('renders', () => {
  it('should render categories', async () => {
    const mockContext = {
      categories: categoriesMock,
      isLoading: false,
    };

    (useCategoriesCntxt as jest.MockedFunction<typeof useCategoriesCntxt>).mockReturnValue(mockContext);

    render(<Categories currentCategory='iceCreams' />);

    const categoryTab = await screen.findByRole('tab');
    const categoryImg = await screen.findByRole('img');

    expect(categoryTab).toHaveTextContent(/ice creams/i);
    expect(categoryImg.getAttribute('alt')).toMatch(/ice cream/i);
  });

  it('should render skeleton if isLoading=true', async () => {
    const notLoadedCntxt = {
      categories: categoriesMock,
      isLoading: true,
    };
    (useCategoriesCntxt as jest.MockedFunction<typeof useCategoriesCntxt>).mockReturnValue(notLoadedCntxt);
    render(<Categories currentCategory='iceCreams' />);

    const tablist = screen.queryByRole('tablist');
    const skeleton = await screen.findByTestId('categoriesSkeleton');

    expect(tablist).not.toBeInTheDocument();
    expect(skeleton).toBeInTheDocument();
  });
});

describe('accessibility', () => {
  beforeEach(() => {
    const mockContext = {
      categories: categoriesMock,
      isLoading: false,
    };

    (useCategoriesCntxt as jest.Mock).mockReturnValue(mockContext);
  });

  test('current category should have aria-selected=true', async () => {
    render(<Categories currentCategory='iceCreams' />);

    const selectedCategory = await screen.findByRole('tab', { selected: true });

    expect(selectedCategory).toHaveTextContent(/ice creams/i);
  });

  it('categories should be able to be focused', async () => {
    const user = userEvent.setup();
    render(<Categories currentCategory='iceCreams' />);

    const categoryTab = await screen.findByRole('tab');

    await user.keyboard('{Tab}');
    expect(categoryTab).toHaveFocus();
  });
});
