import { ColorModeScript, theme } from '@chakra-ui/react';
import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html style={{ scrollBehavior: 'smooth' }}>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />

          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
            rel="stylesheet"
          />

          <meta
            name="description"
            content="portfólio do desenvolvedor web joão Dias, criado com NextJS, ReactJS e Chakra UI.
            Portfólio criado para mostrar alguns conhecimentos e projetos desenvolvidos com a stack Javascript e Typescript."
          />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />

          <NextScript />
        </body>
      </Html>
    );
  }
}
