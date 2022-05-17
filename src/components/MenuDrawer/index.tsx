import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  List,
  ListItem,
  Stack,
  useBreakpointValue,
  useColorModeValue
} from '@chakra-ui/react';
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext';
import { ButtonThemeSwitch } from '../Header/ButtonThemeSwitch';

export function MenuDrawer(): JSX.Element {
  const { isOpen, onClose } = useSidebarDrawer();
  const bgDrawer = useColorModeValue('gray.200', "gray.800")
  const isDrawerSideBar = useBreakpointValue({
    base: true,
    lg: false,
  });

  if (isDrawerSideBar) {
    return (
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent
            bg={bgDrawer}
            p="4"
            alignItems="center"
            justifyContent="center"
          >
            <DrawerCloseButton mt="6" />

            <DrawerBody>
              <List mt="13rem" textAlign="center" fontSize="2xl">
                <Stack spacing={5}>
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
                </Stack>
              </List>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    );
  }

  return <span />;
}
