import { Divider, Flex, Grid, Heading } from '@chakra-ui/react';
import { Project } from './Project';

export function Projects(): JSX.Element {
  return (
    <Flex
      as="section"
      direction="column"
      align="center"
      mx="auto"
      w="100%"
      minH="100vh"
      maxW={1280}
    >
      <Heading mb="4rem" mt="10" id="projects" data-aos="fade-left">
        Projetos
      </Heading>

      <Grid
        data-aos="fade-right"
        templateColumns="repeat(auto-fill, minmax(16rem, 1fr) )"
        w="90%"
        mx="auto"
        mb="10"
        alignItems="center"
        gap={5}
        justifyItems="center"
      >
        <Project
          description="Newsletter de reactJS"
          imgSrc="./project.png"
          linkGithub="https://github.com/joaoeduardodias/ig.news"
          title="Ig.News"
        />
        <Project
          description="Projeto de landing page para uma empresa de viagens aéreas"
          imgSrc="./project2.png"
          linkGithub="https://github.com/joaoeduardodias/challenge-chakra-ui"
          title="World Trip"
        />
        <Project
          description="Dashboard para web apps"
          imgSrc="./dashgo.png"
          linkGithub="https://github.com/joaoeduardodias/dashgo"
          title="DashGo"
        />
        <Project
          description="projeto desenvolvido no evento NLW da rocketseat"
          imgSrc="./moveit.png"
          linkGithub="https://github.com/joaoeduardodias/move-it"
          title="Move it"
        />
        <Project
          description="Calculadora feita usando socket.io para comunicação em tempo real"
          imgSrc="./project2.png"
          linkGithub="https://github.com/joaoeduardodias/WebCalc"
          title="Web calc"
        />
        <Project
          description="Projeto desenvolvido no treinamento de ReactJS, Ignite"
          imgSrc="./rocketshoes.png"
          linkGithub="https://github.com/joaoeduardodias/rocketshoes"
          title="RocketShoes"
        />
        <Project
          description="Projeto desenvolvido no treinamento de ReactJS, Ignite"
          imgSrc="./gorestaunt.png"
          linkGithub="https://github.com/joaoeduardodias/desafio-04-ReactJS"
          title="Go Restaurant"
        />
        <Project
          description="Portfólio criado com o objetivo de mostrar o parte do meu conhecimento no desenvolvimento web"
          imgSrc="./portfolio.png"
          linkGithub="https://github.com/joaoeduardodias/portfolio"
          title="Portfólio"
        />
      </Grid>

      <Divider mt="auto" borderColor="teal.400" />
    </Flex>
  );
}
