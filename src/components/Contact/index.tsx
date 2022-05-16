import {
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Textarea,
  theme
} from '@chakra-ui/react';
import { FormEvent, useState } from 'react';
import toast from 'react-hot-toast';
import { sendMail } from '../../services/SendMail';

export function Contact(): JSX.Element {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent): Promise<void> {
    e.preventDefault();

    try {
      setLoading(true);
      await sendMail(name, email, message);
      setEmail('');
      setName('');
      setMessage('');
      setLoading(false);
      toast('Mensagem enviada com sucesso!', {
        style: {
          background: theme.colors.green[500],
          color: '#FFF',
        },
      });
    } catch (error) {
      toast('Algo de errado aconteceu, por favor tente novamente!', {
        style: {
          background: theme.colors.red[700],
          color: '#FFF',
        },
      });
    }
  }

  return (
    <Flex
      as="section"
      direction="column"
      align="center"
      mx="auto"
      w="100%"
      maxW={1280}
    >
      <Heading mb="4rem" mt="4" id="contact" data-aos="fade-right">
        Contato
      </Heading>

      <FormControl
        data-aos="fade-left"
        as="form"
        maxW="50rem"
        w="90%"
        display="flex"
        flexDir="column"
        onSubmit={handleSubmit}
      >
        <Stack direction={['column', 'row']}>
          <Stack w="100%" spacing={0}>
            <FormLabel mb="0" ml="2" htmlFor="name">
              Nome
            </FormLabel>
            <Input
              id="name"
              size="lg"
              placeholder="Nome"
              isRequired
              value={name}
              onChange={e => setName(e.target.value)}
            />
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
              value={email}
              onChange={e => setEmail(e.target.value)}
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
          resize="none"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <Button
          type="submit"
          colorScheme="green"
          w="6rem"
          ml="auto"
          mt="3"
          isLoading={loading}
        >
          Enviar
        </Button>
      </FormControl>

      <Divider mt="20rem" borderColor="teal.400" />
    </Flex>
  );
}
