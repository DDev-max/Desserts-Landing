import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { SponsorRecipes } from './sponsorRecipes';
import { fetchData } from '@/utils/fetchData/fetchData';

jest.mock('@/utils/fetchData/fetchData');

it('should render sponsored links', async () => {
  const mockFetch = [
    {
      id: '1',
      dish: 'Tiramisu',
      image: 'https://img.com',
      url: 'https://sponsor.com',
    },
  ];

  (fetchData as jest.Mock).mockReturnValue(mockFetch);

  render(await SponsorRecipes());

  const recipeName = await screen.findByText(mockFetch[0].dish);
  const image = await screen.findByRole('img');
  const link = await screen.findByRole('link');

  expect(recipeName).toBeInTheDocument();
  expect(image).toBeInTheDocument();
  expect(link).toHaveAttribute('href', mockFetch[0].url);
});
