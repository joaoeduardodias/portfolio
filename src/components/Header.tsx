import {
  Avatar,
  Flex,
  Heading,
  Icon,
  IconButton,
  List,
  ListItem,
  Text,
  useBreakpointValue
} from '@chakra-ui/react';
import { RiMenuLine } from 'react-icons/ri';
import { useSidebarDrawer } from '../contexts/SidebarDrawerContext';

export function Header(): JSX.Element {
  const { onOpen } = useSidebarDrawer();
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      as="header"
      w="100%"
      maxW={1480}
      h="20"
      mx="auto"
      mt="4"
      px={['1rem', '3rem', '3rem', '6rem']}
      align="center"
      justify="space-between"
    >
      <Flex align="center" justify="center">
        <Flex direction="column" align="end">
          <Heading as="h1" fontSize={['3xl', '5xl']}>
            João Dias
          </Heading>
          <Text
            as="span"
            lineHeight="2px"
            fontSize={['sm', 'md']}
            color="teal.400"
          >
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
      {isWideVersion ? (
        <List display="flex" gap="2rem" fontSize="2xl">
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
            <a href="projetos">Projetos</a>
          </ListItem>
          <ListItem
            _hover={{ color: 'teal.400', textDecoration: 'underline' }}
            transitionDuration="0.5s"
          >
            <a href="contato">Contato</a>
          </ListItem>
        </List>
      ) : (
        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="38"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
        />
      )}
    </Flex>
  );
}
