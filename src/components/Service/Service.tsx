import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Tag,
  TagLabel,
  Text,
  VStack,
} from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

export type Props = {
  title: string
  description: string
  Content?: React.FC
  imageSrc: string
  alternate?: boolean
  tags?: string[]
}

export default function Service({
  title,
  description,
  imageSrc,
  alternate = false,
  Content = () => null,
  tags = [],
}: Props) {
  return (
    <AccordionItem>
      <h2>
        <AccordionButton
          py={4}
          bg="gray.100"
          _expanded={{ bg: 'gray.700', color: 'white' }}
        >
          <Box as="span" flex="1" textAlign="left">
            <Text fontSize={['lg', 'xl']}>{title}</Text>
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <Flex
          w="100%"
          flexDir={{ base: 'column', md: 'row' }}
          wrap="wrap"
          gap={12}
          py={4}
        >
          <Flex flexDir="column" w="100%" gap={5} alignItems="flex-start">
            <Text lineHeight={1.6}>{description}</Text>
            <Content />
            <Flex w="100%" wrap={{ base: 'wrap', md: 'nowrap' }}>
              <HStack spacing={3} wrap="wrap" w="100%">
                {tags.map((tag) => (
                  <Tag
                    key={tag}
                    size={['md', 'lg']}
                    borderRadius="2xl"
                    variant="solid"
                  >
                    <TagLabel>{tag}</TagLabel>
                  </Tag>
                ))}
              </HStack>
              <Button
                colorScheme="red"
                justifySelf="flex-end"
                alignSelf="flex-end"
              >
                Book now
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </AccordionPanel>
    </AccordionItem>
  )
}
