import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

type Props = {}

export default function About({}: Props) {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      pt={{ lg: 10 }}
      flexDir={{
        base: 'column',
        lg: 'row',
      }}
    >
      <Box
        position="relative"
        width={{ base: '100%', lg: 600 }}
        height={{ base: 250, lg: 450 }}
        bottom={{ lg: '20px' }}
        left={{ lg: 20 }}
      >
        <Image
          src="https://picsum.photos/600/600"
          alt=""
          fill
          style={{
            objectFit: 'cover',
          }}
        />
      </Box>
      <Stack
        position="relative"
        spacing={0}
        alignItems="center"
        justifyContent="center"
      >
        <Stack
          position="relative"
          right={{ lg: 20 }}
          bg="linear-gradient(140deg, var(--chakra-colors-red-700), var(--chakra-colors-red-500))"
          color="white"
          px={{ base: 6, lg: 10 }}
          py={[12, 10]}
          h="fit-content"
          maxW={{ lg: '600px' }}
          boxShadow="xl"
          spacing={4}
        >
          <Heading fontSize="4xl">About us</Heading>
          <Text fontSize="lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro
            dolore modi corrupti sunt reiciendis doloremque animi veniam vel
            enim reprehenderit quod vero laudantium, aperiam ad perferendis
            exercitationem laboriosam cum molestiae.
          </Text>
          <Text fontSize="lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro
            dolore modi corrupti sunt reiciendis doloremque.
          </Text>
        </Stack>
      </Stack>
    </Flex>
  )
}
