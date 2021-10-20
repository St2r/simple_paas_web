import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil';
import { initializeState } from '@model/utils/initialize';

import './style.css'

function MyApp({Component, pageProps}: AppProps) {
  return <RecoilRoot initializeState={initializeState(pageProps)}>
    <Component/>
  </RecoilRoot>
}

export default MyApp
