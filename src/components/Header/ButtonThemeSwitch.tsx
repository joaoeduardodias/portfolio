import { Button, Icon, ListItem, useColorMode } from "@chakra-ui/react";
import { FaMoon, FaSun } from 'react-icons/fa';


export function ButtonThemeSwitch():JSX.Element {
  const {colorMode ,toggleColorMode} = useColorMode()

  return (
    <ListItem>
    <Button variant="unstyled" onClick={toggleColorMode} p="0">
      {colorMode === 'dark' ? <Icon as={FaSun} fontSize="3xl"/> : <Icon as={FaMoon}fontSize="3xl" />}
      
    </Button>
    
  </ListItem>
  )
}