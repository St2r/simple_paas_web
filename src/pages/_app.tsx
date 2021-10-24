import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil';
import { initializeState } from '@model/utils/initialize';
import { ThemeProvider } from '@emotion/react';
import defaultTheme from '@client/theme/default';

/** Roboto FontFace */
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

/** Global CSS */
import '@client/styles/global.css';
import { AppPropsWithLayout } from '@client/types';

export default function MyApp({Component, pageProps}: AppPropsWithLayout) {

  const getLayout = Component.getLayout ?? (page => page)

  return <RecoilRoot initializeState={initializeState(pageProps)}>
    <ThemeProvider theme={defaultTheme}>
      {getLayout(<Component/>)}
    </ThemeProvider>
  </RecoilRoot>
}
