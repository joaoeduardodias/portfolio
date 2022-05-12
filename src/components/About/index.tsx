import {
  Avatar,
  Divider,
  Flex,
  Heading,
  Image,
  Text,
  useBreakpointValue
} from '@chakra-ui/react';

export function About(): JSX.Element {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Flex
      as="section"
      direction="column"
      align="center"
      mx="auto"
      w="100%"
      h="100vh"
      maxW={1280}
    >
      <Heading mb={['3rem', '6rem']} mt="10" id="about" data-aos="fade-left">
        Sobre
      </Heading>
      <Flex
        data-aos="fade-right"
        maxW="65rem"
        w="100%"
        align="center"
        justify={['center', 'center', 'center', 'space-between']}
        px="15"
      >
        {isWideVersion && <Image src="./about.svg" w="25rem" />}
        <Flex direction="column" align="center" justify="center">
          <Avatar src="./profile.png" name="João Dias" size="2xl" mb="5" />
          <Text as="p" textAlign="center" maxW="30rem">
            Formado em Análise e desenvolvimento de sistemas pela UNIFUNEC, em
            Santa Fé do Sul-SP, em 2019. Desenvolvi uma paixão por desenvolver
            soluções que melhoram o mundo, com isso fui melhorando minhas Hard
            Skills e Soft Skills. em 2021 Participei do treinamento da
            Rocketseat, o Ignite nas trilhas de ReactJS e NodeJS, onde pude
            aprender e treinar os conceitos mais modernos e seguros do
            desenvolvimento web. Já trabalhei como freelancer, desenvolvendo um
            marketplace de vendas de roupas e já desenvolvi vários projetos
            utilizando essas tecnologias, e alguns destes, você verá logo
            abaixo.
          </Text>
        </Flex>
      </Flex>

      <Divider mt="auto" borderColor="teal.400" />
    </Flex>
  );
}
