import { atom } from 'recoil';

export * from './utils/initialize';

export const testAtom = atom({
  key: 'testAtom',
  default: 'initial',
});

