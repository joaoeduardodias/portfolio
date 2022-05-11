import { Flex, Heading, Icon, Text } from '@chakra-ui/react';
import { ArrowFatLinesDown } from 'phosphor-react';

export function Hero(): JSX.Element {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      px="6"
      h="calc(100vh - 6rem)"
    >
      <Heading fontSize="6xl">Olá, seja bem Vindo!</Heading>
      <Text as="p" maxW="50rem" textAlign="center" fontSize="xl">
        Me chamo João Dias,sou desenvolvedor fullstack web, trabalho com
        tecnologias como o ReactJS, NextJS e NodeJS. Tecnologias modernas e que
        oferecem códigos melhores e mais perfomáticos.
        <br />
        <Text color="teal.300" fontWeight="black">
          Conheça o meu trabalho!
        </Text>
      </Text>

      <Icon as={ArrowFatLinesDown} fontSize="5xl" mt="4" color="teal.500" />
    </Flex>
  );
}
