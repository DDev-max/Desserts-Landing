import '@testing-library/jest-dom';
import { useContext } from 'react';
import { useCategoriesCntxt } from './useCategoriesCntxt';
import type { ContextCategoriesProps } from '../data/types';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useContext: jest.fn(),
}));

it('should throw an error if context is undefined', () => {
  (useContext as jest.Mock).mockReturnValue(undefined);
  const consoleError = jest.spyOn(console, 'error').mockImplementation(() => {});

  useCategoriesCntxt();
  expect(consoleError).toHaveBeenCalledWith(expect.objectContaining({ name: 'NoProviderError' }));
});

it('should return context', () => {
  const mockedContext: ContextCategoriesProps = {
    categories: [
      {
        id: '1',
        imgLink: 'image.com',
        name: 'cookies',
      },
    ],

    isLoading: false,
  };

  (useContext as jest.Mock).mockReturnValue(mockedContext);

  const context = useCategoriesCntxt();

  expect(context).toBe(mockedContext);
});
