import { Flex, GridItem, Heading, Image, Text, useColorModeValue } from '@chakra-ui/react';

interface TechnologyProps {
  title: string;
  imgSrc: string;
  summary: string;
  color: string;
}

export function Technology({
  imgSrc,
  title,
  summary,
  color,
}: TechnologyProps): JSX.Element {
  const colorText = useColorModeValue('gray.800', "gray.400")



  return (
    <GridItem w="auto">
      <Flex
        direction="column"
        align="initial"
        justify="center"
        border="4px"
        borderColor={color}
        rounded="md"
        p="0.5"
        overflow="hidden"
        maxW={['115px', '112px']}
        transition="all"
        transitionDuration="0.5s"
        transitionTimingFunction="linear"
        role="group"
        _hover={{
          maxWidth: '1000px',
        }}
      >
        <Flex align="center">
          <Image
            src={`./${imgSrc}`}
            minW="100px"
            maxH="100px"
            objectFit="contain"
            rounded="md"
          />
          <Text
            maxW="10rem"
            maxH="100px"
            fontSize="sm"
            ml="2"
            lineHeight="1"
            color={colorText}
            align="left"
          >
            {summary}
          </Text>
        </Flex>
        <Heading
          as="h3"
          fontSize="xl"
          mt="2"
          textAlign="center"
          _groupHover={{ textAlign: 'left', marginLeft: '1rem' }}
        >
          {title}
        </Heading>
      </Flex>
    </GridItem>
  );
}
