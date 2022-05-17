import { Avatar, Flex, Heading, Text } from "@chakra-ui/react";

export function Profile():JSX.Element {

  return (
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
  )
}