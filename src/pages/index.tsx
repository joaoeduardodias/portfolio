import { Flex } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';

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
    </Flex>
  );
};

export default Home;
