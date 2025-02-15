import { fetchData } from './fetchData';

const consoleErrorMock = jest.spyOn(console, 'error').mockImplementation(() => {});

it('returns data', async () => {
  const mockedFetch = [
    {
      name: 'Cookies',
      id: 'cookies',
      imgLink: 'img.com',
    },
  ];

  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockedFetch),
      ok: true,
    })
  ) as jest.Mock;

  const data = await fetchData({ URL: '' });

  expect(data).toEqual(mockedFetch);
});

describe('fetch errors', () => {
  it('throws error when response is not ok', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: jest.fn(),
        ok: false,
      })
    ) as jest.Mock;

    await expect(fetchData({ URL: '' })).rejects.toThrow('Fetch error');
  });

  it('should log an error', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: jest.fn(),
        status: 404,
        statusText: 'Not Found',
        ok: false,
      })
    ) as jest.Mock;

    await expect(fetchData({ URL: '' })).rejects.toThrow('Fetch error: 404, Not Found');

    expect(consoleErrorMock).toHaveBeenCalledWith('Fetch error: Error');
  });
});
