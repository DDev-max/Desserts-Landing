jest.mock('next/navigation', () => {
  return {
    __esModule: true,
    usePathname: () => ({
      pathname: '',
    }),
    useRouter: () => ({
      push: jest.fn(),
      replace: jest.fn(),
    }),
    useSearchParams: () => ({
      get: () => {},
      set: () => {},
    }),
  }
})
