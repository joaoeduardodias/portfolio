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
  theme,
  useColorModeValue
} from '@chakra-ui/react';
import { FormEvent, useState } from 'react';
import toast from 'react-hot-toast';
import { sendMail } from '../../services/SendMail';

export function Contact(): JSX.Element {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const color = useColorModeValue('gray.600', 'gray.300')
  const buttonBackground = useColorModeValue('green.300', 'green.500')
  const buttonHoverBackground = useColorModeValue('green.500', 'green.700')

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
              borderColor={color}
              border="2px"
              value={name}
              onChange={e => setName(e.target.value)}
              _hover={{
                borderColor: color,
              }}
              _placeholder={{
                color,
                opacity: 0.8,
              }}
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
              borderColor={color}
              border="2px"
              size="lg"
              isRequired
              value={email}
              onChange={e => setEmail(e.target.value)}
              _hover={{
                borderColor: color,
              }}
              _placeholder={{
                color,
                opacity: 0.8,
              }}
              
            />
          </Stack>
        </Stack>
        <FormLabel mb="0" mt="5" ml="2" htmlFor="message">
          Mensagem
        </FormLabel>
        <Textarea
          id="message"
          size="lg"
          borderColor={color}
          border="2px"
          isRequired
          placeholder="Mensagem..."
          variant="outline"
          resize="none"
          value={message}
          onChange={e => setMessage(e.target.value)}
          _hover={{
            borderColor: color,
          }}
          _placeholder={{
            color,
            opacity: 0.8,
          }}
        />
        <Button
          type="submit"
          bg={buttonBackground}
          w="6rem"
          ml="auto"
          mt="3"
          isLoading={loading}
          _hover={{
            background: buttonHoverBackground,
          }}
        >
          Enviar
        </Button>
      </FormControl>

      <Divider mt="20rem" borderColor="teal.400" />
    </Flex>
  );
}
