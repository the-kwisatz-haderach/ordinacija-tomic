import React from 'react'
import { Box, Container } from '@chakra-ui/layout'
import { Heading } from '@chakra-ui/react'
import BusinessDetails from '@components/BusinessDetails/BusinessDetails'
import Image from 'next/image'
import heroImg from '../../images/hero_1.png'

type Props = {}

export default function Hero({}: Props) {
  return (
    <Container maxW={2000} p={0}>
      <Box
        height={560}
        width="100%"
        pos="relative"
        display="flex"
        // _before={{
        //   content: '""',
        //   position: 'absolute',
        //   inset: 0,
        //   width: '100%',
        //   height: '100%',
        //   zIndex: 1,
        //   bgImage: 'linear-gradient(to top, #0000005a, transparent)',
        // }}
      >
        {/* <Heading
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
        </Heading> */}
        <Box pos="relative" width="100%" height="inherit">
          <Image
            alt="hero"
            fill
            priority
            style={{
              objectFit: 'cover',
            }}
            src={heroImg}
          />
        </Box>
      </Box>
      <Box w="100%" h={200} bg="brand.900">
        Test
      </Box>
      {/* <BusinessDetails zIndex={2} position="relative" bottom={20} /> */}
    </Container>
  )
}
