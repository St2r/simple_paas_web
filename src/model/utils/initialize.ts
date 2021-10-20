import type { MutableSnapshot } from 'recoil';
import { textState } from '../../pages/_app';

// 直接取 pageProps 初始化 Recoil，业务直接使用 Recoil
export const initializeState = (initialState: {[key: string]: any}) =>  ({ set }: MutableSnapshot) => {
  for(const key of Object.keys(initialState)) {
    set(textState, initialState[key]);
  }
}
