/**
 * @jest-environment node
 */
import type { NextRequest } from 'next/server';
import { GET } from './route';
import type { PageCatgry, recipeNames } from '@/data/types';
import { recipes } from '@/data/consts';

const testRecipeName = 'cookies';
const params: Promise<{ recipeName: recipeNames }> = Promise.resolve({
  recipeName: testRecipeName,
});

it('should return the quantity given in "per_page"', async () => {
  const request = {
    nextUrl: {
      searchParams: {
        get: jest.fn().mockImplementation(param => {
          if (param === 'page') return 1;
          if (param === 'per_page') return 3;
        }),
      },
    },
  } as unknown as NextRequest;

  const response = await GET(request, { params });
  const body: PageCatgry = await response.json();

  expect(body.data).toHaveLength(3);
});

it('must return all data if the “per_page” parameter is not specified', async () => {
  const request = {
    nextUrl: {
      searchParams: {
        get: jest.fn(),
      },
    },
  } as unknown as NextRequest;

  const response = await GET(request, { params });
  const body: PageCatgry = await response.json();

  expect(body.data).toHaveLength(recipes[testRecipeName].length);
});

test('default page should be the first page', async () => {
  const request = {
    nextUrl: {
      searchParams: {
        get: jest.fn().mockImplementation(param => {
          if (param === 'per_page') return 3;
        }),
      },
    },
  } as unknown as NextRequest;

  const response = await GET(request, { params });
  const body: PageCatgry = await response.json();

  expect(body.prev).toBeNull();
  expect(body.next).toBe(2);
});

it('should return the paginated recipes', async () => {
  const perPage = 2;
  const request = {
    nextUrl: {
      searchParams: {
        get: jest.fn().mockImplementation(param => {
          if (param === 'page') return 1;
          if (param === 'per_page') return perPage;
        }),
      },
    },
  } as unknown as NextRequest;

  const response = await GET(request, { params });
  const body: PageCatgry = await response.json();

  expect(body.data).toEqual(recipes[testRecipeName].slice(0, perPage));
  expect(body.items).toBeDefined();
  expect(body.next).toBeDefined();
  expect(body.prev).toBeDefined();
  expect(body.pages).toBeDefined();
});

it('should return the right page of a recipe', async () => {
  const request = {
    nextUrl: {
      searchParams: {
        get: jest.fn().mockImplementation(param => {
          if (param === 'page') return 2;
          if (param === 'per_page') return 1;
        }),
      },
    },
  } as unknown as NextRequest;

  const response = await GET(request, { params });
  const body: PageCatgry = await response.json();

  expect(body.data).toEqual(recipes[testRecipeName].slice(1, 2));
});

it('should return an error messages if recipe name is not valid', async () => {
  const request = {
    nextUrl: {
      searchParams: {
        get: jest.fn().mockImplementation(param => {
          if (param === 'page') return 2;
          if (param === 'per_page') return 1;
        }),
      },
    },
  } as unknown as NextRequest;

  const params = Promise.resolve({
    recipeName: 'invalidName' as recipeNames,
  });

  const response = await GET(request, { params });
  const body = await response.json();

  expect(body).toMatch(/Error/i);
});
