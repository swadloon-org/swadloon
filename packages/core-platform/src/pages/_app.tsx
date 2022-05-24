import PlausibleProvider from 'next-plausible';
import { SessionProvider } from 'next-auth/react';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <PlausibleProvider domain="demo.swadloon.dev">
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </PlausibleProvider>
  );
}
