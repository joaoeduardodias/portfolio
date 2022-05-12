import {
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Textarea
} from '@chakra-ui/react';

export function Contact(): JSX.Element {
  return (
    <Flex
      as="section"
      direction="column"
      align="center"
      mx="auto"
      w="100%"
      maxW={1280}
    >
      <Heading mb="4rem" mt="4">
        Contato
      </Heading>

      <FormControl
        as="form"
        maxW="50rem"
        w="90%"
        display="flex"
        flexDir="column"
      >
        <Stack direction={['column', 'row']}>
          <Stack w="100%" spacing={0}>
            <FormLabel mb="0" ml="2" htmlFor="name">
              Nome
            </FormLabel>
            <Input id="name" size="lg" placeholder="Nome" isRequired />
          </Stack>

          <Stack w="100%" spacing={0}>
            <FormLabel mb="0" ml="2" htmlFor="email">
              E-mail
            </FormLabel>
            <Input
              placeholder="E-mail"
              type="email"
              variant="outline"
              id="email"
              size="lg"
              isRequired
            />
          </Stack>
        </Stack>
        <FormLabel mb="0" mt="5" ml="2" htmlFor="message">
          Mensagem
        </FormLabel>
        <Textarea
          id="message"
          size="lg"
          isRequired
          placeholder="Mensagem..."
          variant="outline"
        />
        <Button type="submit" colorScheme="green" w="6rem" ml="auto" mt="3">
          Enviar
        </Button>
      </FormControl>

      <Divider mt="20rem" borderColor="teal.400" />
    </Flex>
  );
}
