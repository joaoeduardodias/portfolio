import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import { GlobalStyleProps, mode } from '@chakra-ui/theme-tools';
const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

export const theme = extendTheme({
  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
  },
  styles: {
    global: (props: GlobalStyleProps) => ({
      body: {
        bg: mode('whiteAlpha.800','gray.900')(props),
        color: mode('blackAlpha.800','gray.50')(props),
      },

      '*::-webkit-scrollbar': {
        w: '10px',
        // h: '5px',
      },
      '*::-webkit-scrollbar-thumb': {
        bg: 'teal.400',
        rounded: 'md',
      },
      '*::-webkit-scrollbar-track': {
        bg: 'gray.500',
      },
    })
  },
  config,
});
