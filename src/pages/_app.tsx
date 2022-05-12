import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { SideBarDrawerProvider } from '../contexts/SidebarDrawerContext';
import { theme } from '../styles/theme';

const MyApp = function ({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <SideBarDrawerProvider>
        <Component {...pageProps} />
      </SideBarDrawerProvider>
    </ChakraProvider>
  );
};

export default MyApp;
