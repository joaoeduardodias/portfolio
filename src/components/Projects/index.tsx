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
      <Heading mb="4rem" mt="10" id="projects">
        Projetos
      </Heading>

      <Grid
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
          linkGithub="https://github.com/joaoeduardodias"
          title="Ig.News"
        />
        <Project
          description="Projeto de uma empresa de viagens"
          imgSrc="./project2.png"
          linkGithub="https://github.com/joaoeduardodias"
          title="World Trip"
        />
        <Project
          description="Newsletter de reactJS"
          imgSrc="./project.png"
          linkGithub="https://github.com/joaoeduardodias"
          title="Ig.News"
        />
        <Project
          description="Projeto de uma empresa de viagens"
          imgSrc="./project2.png"
          linkGithub="https://github.com/joaoeduardodias"
          title="World Trip"
        />
        <Project
          description="Newsletter de reactJS"
          imgSrc="./project.png"
          linkGithub="https://github.com/joaoeduardodias"
          title="Ig.News"
        />
        <Project
          description="Projeto de uma empresa de viagens"
          imgSrc="./project2.png"
          linkGithub="https://github.com/joaoeduardodias"
          title="World Trip"
        />
        <Project
          description="Newsletter de reactJS"
          imgSrc="./project.png"
          linkGithub="https://github.com/joaoeduardodias"
          title="Ig.News"
        />
        <Project
          description="Projeto de uma empresa de viagens"
          imgSrc="./project2.png"
          linkGithub="https://github.com/joaoeduardodias"
          title="World Trip"
        />
      </Grid>

      <Divider mt="auto" borderColor="teal.400" />
    </Flex>
  );
}
