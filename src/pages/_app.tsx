import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Toaster } from 'react-hot-toast';
import { SideBarDrawerProvider } from '../contexts/SidebarDrawerContext';
import { theme } from '../styles/theme';

const MyApp = function ({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Portfólio | João Dias</title>
      </Head>
      <SideBarDrawerProvider>
        <Toaster position="top-right" />
        <Component {...pageProps} />
      </SideBarDrawerProvider>
    </ChakraProvider>
  );
};

export default MyApp;
