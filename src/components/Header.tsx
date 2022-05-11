import { Avatar, Flex, Heading, List, ListItem, Text } from '@chakra-ui/react';

export function Header(): JSX.Element {
  return (
    <Flex
      as="header"
      w="100%"
      maxW={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6rem"
      align="center"
      justify="space-between"
    >
      <Flex align="center" justify="center">
        <Flex direction="column" align="end">
          <Heading as="h1" fontSize="5xl">
            João Dias
          </Heading>
          <Text as="span" lineHeight="2px" fontSize="md" color="teal.400">
            Desenvolvedor web
          </Text>
        </Flex>
        <Avatar
          size="lg"
          name="João Dias"
          src="https://github.com/joaoeduardodias.png"
          ml="3"
        />
      </Flex>

      <List display="flex" gap="2rem" fontSize="2xl">
        <ListItem
          _hover={{ color: 'teal.400', textDecoration: 'underline' }}
          transitionDuration="0.5s"
        >
          <a href="projetos">Projetos</a>
        </ListItem>
        <ListItem
          _hover={{ color: 'teal.400', textDecoration: 'underline' }}
          transitionDuration="0.5s"
        >
          <a href="conhecimentos">Conhecimentos</a>
        </ListItem>
        <ListItem
          _hover={{ color: 'teal.400', textDecoration: 'underline' }}
          transitionDuration="0.5s"
        >
          <a href="sobre">Sobre</a>
        </ListItem>
        <ListItem
          _hover={{ color: 'teal.400', textDecoration: 'underline' }}
          transitionDuration="0.5s"
        >
          <a href="contato">Contato</a>
        </ListItem>
      </List>
    </Flex>
  );
}
