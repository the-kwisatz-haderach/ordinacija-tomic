import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

type Props = {
  title: string
  description: string
  imageSrc: string
}

export default function Service({ title, description, imageSrc }: Props) {
  return (
    <Flex
      overflow="hidden"
      borderRadius="lg"
      flexDir={['column', 'column', 'row']}
      borderWidth={1}
      borderStyle="solid"
      borderColor="gray.200"
      transition="box-shadow 0.5s ease-in-out"
      _hover={{
        boxShadow: '2xl',
      }}
    >
      <Box
        position="relative"
        minWidth={250}
        height={250}
        objectFit="fill"
        overflow="hidden"
      >
        <Image src={imageSrc} alt={title} fill />
      </Box>
      <VStack spacing={3} alignItems="flex-start" px={8} py={6}>
        <Heading>{title}</Heading>
        <Divider />
        <Text>{description}</Text>
        <Button alignSelf="flex-end">Get in touch</Button>
      </VStack>
    </Flex>
  )
}
