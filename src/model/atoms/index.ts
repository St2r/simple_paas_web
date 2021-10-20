import { atom } from 'recoil';
import type { RecoilState } from 'recoil';

// atom
export const initializeableAtomMap: { [key: string]: RecoilState<any> } = {
  testAtom: atom({
    key: 'testAtom',
    default: 'initial',
  }),
};
