import PlausibleProvider from 'next-plausible';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';

import { base } from './app.css';
import { TestComponent } from '@newrade/core-react-ui-test-component';
// import { Providers } from '../providers/providers';

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <div className={base}>
      <TestComponent name={'world'}></TestComponent>
      {/* <Providers> */}
      {/* <PlausibleProvider domain="demo.swadloon.dev"> */}
      {/* <SessionProvider session={session}> */}
      <Component {...pageProps} />
      {/* </SessionProvider> */}
      {/* </PlausibleProvider> */}
      {/* </Providers> */}
    </div>
  );
}
