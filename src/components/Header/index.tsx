import {
  Flex, Icon,
  IconButton,
  List,
  ListItem, useBreakpointValue, useColorModeValue
} from '@chakra-ui/react';
import { RiMenuLine } from 'react-icons/ri';
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext';
import { ButtonThemeSwitch } from './ButtonThemeSwitch';
import { Profile } from './Profile';

export function Header(): JSX.Element {
  const { onOpen } = useSidebarDrawer();
  const bgColor = useColorModeValue('white', "gray.900")
  const borderColor = useColorModeValue('teal.400', "gray.700")

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      as="header"
      w="100%"
      h="24"
      position="fixed"
      top="0"
      bg={bgColor}
      borderBottom="1px"
      borderColor={borderColor}
      py="4"
      zIndex={10}
      
    >
      <Flex
       w="100%"
       h="100%"
      mx="auto"
      maxW={1480}
      px={['1rem', '3rem', '3rem', '6rem']}
      align="center"
      justify="space-between"
      
      >
      <Profile />
      {isWideVersion ? (
        <List display="flex" gap="2rem" alignItems="center" fontSize="xl" >
         <ButtonThemeSwitch />
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
    </Flex>
  );
}
