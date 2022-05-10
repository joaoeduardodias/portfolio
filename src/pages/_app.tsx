import '../styles/globals.scss';
import type { AppProps } from 'next/app';

const MyApp = function ({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
};

export default MyApp;
