import { Button, Flex, Heading, Icon } from '@chakra-ui/react';
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
      <Heading fontSize="6xl">Seja bem Vindo!</Heading>
      <Button bg="teal.400" _hover={{ bg: 'teal.600' }} mt="20" size="lg">
        Contato <Icon as={ArrowFatLinesDown} fontSize="32" ml="3" />
      </Button>
    </Flex>
  );
}
