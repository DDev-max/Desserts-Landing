import '@testing-library/jest-dom';
import { focusTab } from './focustab';

const tabsBtnsRef = {
  current: [{ focus: jest.fn() }, { focus: jest.fn() }],
};

const firstTab = 0;
const lastTab = tabsBtnsRef.current.length - 1;

it('should focus on the next tab when right arrow is pressed', () => {
  const setSelectedBtn = jest.fn(callback => {
    const prev = firstTab;
    return callback(prev);
  });

  const e = { key: 'ArrowRight' } as React.KeyboardEvent<HTMLDivElement>;

  focusTab({ e, setSelectedBtn, tabsBtnsRef });

  expect(tabsBtnsRef.current[firstTab].focus).not.toHaveBeenCalled();
  expect(setSelectedBtn).toHaveReturnedWith(lastTab);
  expect(tabsBtnsRef.current[lastTab].focus).toHaveBeenCalled();
});

it('should focus on previous tab when left arrow is pressed', () => {
  const setSelectedBtn = jest.fn(callback => {
    const prev = lastTab;
    return callback(prev);
  });

  const e = { key: 'ArrowLeft' } as React.KeyboardEvent<HTMLDivElement>;

  focusTab({ e, setSelectedBtn, tabsBtnsRef });

  expect(tabsBtnsRef.current[lastTab].focus).not.toHaveBeenCalled();
  expect(setSelectedBtn).toHaveReturnedWith(firstTab);
  expect(tabsBtnsRef.current[firstTab].focus).toHaveBeenCalled();
});

it('should go to the first tab when right arrow is pressed at the end of the tablist', () => {
  const setSelectedBtn = jest.fn(callback => {
    const prev = lastTab;
    return callback(prev);
  });

  const e = { key: 'ArrowRight' } as React.KeyboardEvent<HTMLDivElement>;

  focusTab({ e, setSelectedBtn, tabsBtnsRef });

  expect(tabsBtnsRef.current[lastTab].focus).not.toHaveBeenCalled();
  expect(setSelectedBtn).toHaveReturnedWith(firstTab);
  expect(tabsBtnsRef.current[firstTab].focus).toHaveBeenCalled();
});

it('should go to the last tab when left arrow is pressed at the start of the tablist', () => {
  const setSelectedBtn = jest.fn(callback => {
    const prev = firstTab;
    return callback(prev);
  });

  const e = { key: 'ArrowLeft' } as React.KeyboardEvent<HTMLDivElement>;

  focusTab({ e, setSelectedBtn, tabsBtnsRef });

  expect(tabsBtnsRef.current[firstTab].focus).not.toHaveBeenCalled();
  expect(setSelectedBtn).toHaveReturnedWith(lastTab);
  expect(tabsBtnsRef.current[lastTab].focus).toHaveBeenCalled();
});
