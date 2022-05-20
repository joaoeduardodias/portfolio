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


        <Flex align="top" h="9rem" >

          <Flex direction="column" align="center" minW="102px" >
            <Image
          
              src={`./${imgSrc}`}
              w="100px"
              h="100px"
              objectFit="contain"
              rounded="md"
            />
            <Heading
              as="h3"
              fontSize="xl"
              mt="3"
              textAlign="center"
           
            >
              {title}
            </Heading>
          </Flex>

          <Text
            maxW="0"
            maxH="100px"
            fontSize="sm"
            ml="2"
            lineHeight="1"
            color={colorText}
            align="left"
            transition="all"
            transitionDuration="0.5s"
            _groupHover={{
              maxW: "100%",
            }}

          >
            {summary}
          </Text>
        </Flex>

      </Flex>
    </GridItem>
  );
}
