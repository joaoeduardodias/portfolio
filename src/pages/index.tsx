import { Flex } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
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
      <Hero />
      <Technologies />
    </Flex>
  );
};

export default Home;
