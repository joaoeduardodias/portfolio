import {
  Button,
  Flex, Icon,
  IconButton,
  List,
  ListItem, useBreakpointValue, useColorMode
} from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { RiMenuLine } from 'react-icons/ri';
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext';
import { Profile } from './Profile';

export function Header(): JSX.Element {
  const {colorMode ,toggleColorMode} = useColorMode()
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
     <Profile />
      {isWideVersion ? (
        <List display="flex" gap="2rem" alignItems="center" fontSize="xl" >
          <ListItem>
            <Button variant="unstyled" onClick={toggleColorMode} p="0">
              {colorMode === 'dark' ? <Icon as={FaSun} fontSize="3xl"/> : <Icon as={FaMoon}fontSize="3xl" />}
              
            </Button>
            
          </ListItem>
          <ListItem
            _hover={{ color: 'teal.400', textDecoration: 'underline' }}
            transitionDuration="0.5s"
          >
            <a href="#technologies">Conhecimentos</a>
          </ListItem>
          <ListItem
            _hover={{ color: 'teal.400', textDecoration: 'underline' }}
            transitionDuration="0.5s"
          >
            <a href="#about">Sobre</a>
          </ListItem>
          <ListItem
            _hover={{ color: 'teal.400', textDecoration: 'underline' }}
            transitionDuration="0.5s"
          >
            <a href="#projects">Projetos</a>
          </ListItem>
          <ListItem
            _hover={{ color: 'teal.400', textDecoration: 'underline' }}
            transitionDuration="0.5s"
          >
            <a href="#contact">Contato</a>
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
