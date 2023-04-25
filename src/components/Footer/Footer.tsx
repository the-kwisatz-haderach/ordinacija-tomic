import { Box } from '@chakra-ui/layout'
import {
  Center,
  Container,
  Text,
  GridItem,
  Heading,
  SimpleGrid,
} from '@chakra-ui/react'
import React from 'react'
import logo from '@images/tomic_logo.jpeg'
import Image from 'next/image'

type Props = {}

export default function Footer({}: Props) {
  return (
    <Box
      as="footer"
      height={['100%', '100%', 300]}
      backgroundColor="brand.100"
      color="white"
    >
      <Container maxW="container.xl" p={8} height="100%">
        <SimpleGrid columns={[1, 2, 4]} height="100%">
          <GridItem>
            <Heading as="h5" fontSize="xl">
              Contact us
            </Heading>
            <Text>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam,
              illo.
            </Text>
          </GridItem>
          <GridItem>
            <Heading as="h5" fontSize="xl">
              Find us
            </Heading>
            <Text>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam,
              illo.
            </Text>
            <Heading mb={2} as="h5" fontSize="xl">
              Opening hours
            </Heading>
            <Text>13-20</Text>
          </GridItem>
          <GridItem colSpan={2}>
            <Center height="100%">
              <Image src={logo} width={200} height={200} alt="logo" />
            </Center>
          </GridItem>
        </SimpleGrid>
      </Container>
    </Box>
  )
}
