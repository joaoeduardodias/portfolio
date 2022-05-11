import { Divider, Flex, Grid, Heading } from '@chakra-ui/react';
import { Technology } from './Technology';

export function Technologies(): JSX.Element {
  return (
    <Flex
      as="section"
      direction="column"
      align="center"
      mx="auto"
      w="100%"
      h="100vh"
      maxW={1280}
    >
      <Divider mb="10" borderColor="teal.400" />
      <Heading mb="6rem">Conhecimentos</Heading>
      <Grid
        templateColumns="repeat(auto-fill, minmax(16rem, 1fr) )"
        w="90%"
        mx="auto"
        alignItems="center"
        gap={3}
      >
        <Technology
          title="Sass"
          imgSrc="sass.png"
          summary="O Sass é um processador de css, de nível profissional, com ele
           podemos automatizar a criação de nossas telas, com mais velocidade, usabilidade e confiabilidade"
          color="pink.500"
        />
        <Technology
          title="Chakra UI"
          imgSrc="chakra.png"
          summary="É uma biblioteca de componentes simples, modular e acessível, para
          construção de interfaces com ReactJS."
          color="teal.400"
        />
        <Technology
          title="Styled "
          imgSrc="styled-components.svg"
          summary="O styled components permite o uso de css no js, com isso ele nos permite
          usar o css dentro de um arquivo javascript, hoje ele é a biblioteca de css-in-js mais usada no mundo."
          color="yellow.300"
        />
        <Technology
          title="NodeJS"
          imgSrc="nodejs.png"
          summary="O nodeJS foi criado com o intuito de rodarmos o js fora do navegador,sendo assim podemos criar o nosso back-end usando o js,
          e hoje com o nodeJS podemos criar APIs,robustas e escaláveis"
          color="green.400"
        />
        <Technology
          title="ReactJS"
          imgSrc="react.png"
          summary="O ReactJS é uma biblioteca de criação de interfaces usando js, ela ganhou o mercado oferecendo funcionalidades avançadas
          e otimizadas na criação de interfaces."
          color="blue.400"
        />
        <Technology
          title="Next JS"
          imgSrc="nextjs.png"
          summary="O nextJS foi criado para acrescentar mais funcionalidades ao reactJS, ele oferece conceitos como o SSR e o SSG, priorizando o SEO e a experiência do usuário final."
          color="blackAlpha.900"
        />
      </Grid>
      <Divider mt="auto" borderColor="teal.400" />
    </Flex>
  );
}
