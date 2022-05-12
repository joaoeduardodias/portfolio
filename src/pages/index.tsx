import { Flex } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { MenuDrawer } from '../components/MenuDrawer';
import { Projects } from '../components/Projects';
import { Technologies } from '../components/Technologies';

const Home: NextPage = function () {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      w="100%"
      maxW={1480}
      mx="auto"
      minH="100vh"
    >
      <Header />
      <MenuDrawer />
      <Hero />
      <Technologies />
      <About />
      <Projects />
      <Contact />
    </Flex>
  );
};

export default Home;
