import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.900',
        color: 'gray.50',
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
    },
  },
});
