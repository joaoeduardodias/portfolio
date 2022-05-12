import {
  Divider,
  Flex,
  GridItem,
  Heading,
  Image,
  Tag,
  TagLabel,
  TagLeftIcon,
  // eslint-disable-next-line prettier/prettier
  Text
} from '@chakra-ui/react';
import { BsGithub } from 'react-icons/bs';

interface ProjectProps {
  imgSrc: string;
  title: string;
  description: string;
  linkGithub: string;
}

export function Project({
  description,
  imgSrc,
  linkGithub,
  title,
}: ProjectProps): JSX.Element {
  return (
    <GridItem
      border="1px"
      borderColor="teal.400"
      rounded="md"
      w="100%"
      h="100%"
      p="2"
      position="relative"
      cursor="pointer"
    >
      <Flex direction="column">
        <Image
          src={imgSrc}
          w="96%"
          mx="auto"
          h="12rem"
          rounded="md"
          objectFit="cover"
          mb={4}
        />
        <Heading as="h4" fontSize="2xl" ml="1">
          {title}
        </Heading>
        <Divider borderColor="teal.400" mt={1} />
        <Text as="span" fontSize={['md', 'sm']} ml="1" color="gray.300">
          {description}
        </Text>
      </Flex>

      <Tag
        size="md"
        variant="solid"
        colorScheme="teal"
        position="absolute"
        top={7}
        right={-3}
        _hover={{
          background: 'teal.700',
        }}
        transitionDuration="0.5s"
      >
        <TagLeftIcon boxSize="12px" as={BsGithub} />
        <TagLabel>
          <a href={linkGithub} target="_blank" rel="noreferrer">
            Abrir projeto
          </a>
        </TagLabel>
      </Tag>
    </GridItem>
  );
}
