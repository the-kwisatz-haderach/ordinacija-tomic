import { Box, Container } from '@chakra-ui/layout'
import Image from 'next/image'
import React from 'react'

type Props = {}

export default function Hero({}: Props) {
  return (
    <Container maxW={2000} p={0}>
      <Box height={480} width="100%" pos="relative">
        <Image
          alt="hero"
          fill
          objectFit="cover"
          src="https://fastly.picsum.photos/id/838/2000/480.jpg?hmac=iPx8BAOOmy3A8n-b_UeNwJ0RMnBfIlT2r7innUdLjaY"
        />
      </Box>
    </Container>
  )
}
