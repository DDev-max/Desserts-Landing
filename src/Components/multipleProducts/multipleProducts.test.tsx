import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MultipleProducts } from './multipleProducts';
import { fetchData } from '@/utils/fetchData/fetchData';

jest.mock('@/utils/fetchData/fetchData');

it('should render sponsored links', async () => {
  const mockFetch = [
    {
      id: '1',
      dish: 'Tiramisu',
      image:
        'https://img.freepik.com/free-photo/plate-with-tiramisu_23-2147772017.jpg?t=st=1732303160~exp=1732306760~hmac=ab723574d051f0e3f9a57ef87ba8a1e0779c2f245dee9b0bed47302511d3714d&w=360',
      url: 'https://tastesbetterfromscratch.com/easy-tiramisu/',
    },
  ];

  (fetchData as jest.Mock).mockReturnValue(mockFetch);

  render(await MultipleProducts());

  const recipeName = await screen.findByText(mockFetch[0].dish);
  const image = await screen.findByRole('img');
  const link = await screen.findByRole('link');

  expect(recipeName).toBeInTheDocument();
  expect(image).toBeInTheDocument();
  expect(link).toHaveAttribute('href', mockFetch[0].url);
});
