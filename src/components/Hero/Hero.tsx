import { Box, Container } from '@chakra-ui/layout'
import { Heading } from '@chakra-ui/react'
import BusinessDetails from '@components/BusinessDetails/BusinessDetails'
import Image from 'next/image'
import React from 'react'

type Props = {}

export default function Hero({}: Props) {
  return (
    <Container maxW={2000} p={0} mb={-16}>
      <Box
        height={480}
        width="100%"
        pos="relative"
        display="flex"
        alignItems="center"
        justifyContent="center"
        _before={{
          content: '""',
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
          bgImage: 'linear-gradient(to top, #0000005a, transparent)',
        }}
      >
        <Heading
          maxW={{ md: '80%' }}
          textAlign="center"
          px={4}
          marginX="auto"
          as="h1"
          zIndex={1}
          color="white"
          size={['2xl', '4xl']}
        >
          Lorem ipsum, dolor sit amet consectetur.
        </Heading>
        <Image
          alt="hero"
          fill
          priority
          style={{
            objectFit: 'cover',
          }}
          src="https://fastly.picsum.photos/id/838/2000/480.jpg?hmac=iPx8BAOOmy3A8n-b_UeNwJ0RMnBfIlT2r7innUdLjaY"
        />
      </Box>
      <BusinessDetails zIndex={2} position="relative" bottom={20} />
    </Container>
  )
}
