import { Box } from '@chakra-ui/layout'
import NextLink from 'next/link'
import {
  Center,
  Container,
  Text,
  GridItem,
  Heading,
  SimpleGrid,
  Stack,
  Flex,
  Link,
  Button,
} from '@chakra-ui/react'
import React from 'react'
import logo from '@images/tomic_logo.jpeg'
import Image from 'next/image'
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons'

const fakeLink =
  'https://www.google.se/maps/place/Stockholm/@59.3260375,17.8169067,11z/data=!3m1!4b1!4m6!3m5!1s0x465f763119640bcb:0xa80d27d3679d7766!8m2!3d59.3293235!4d18.0685808!16zL20vMDZteHM'

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
        <SimpleGrid gap={8} columns={[1, 2, 4]} height="100%">
          <GridItem>
            <Heading my={2} as="h5" fontSize="xl">
              Contact us
            </Heading>
            <Text fontSize="sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam,
              illo.
            </Text>
            <Stack mt={4} spacing={1}>
              <Flex gap={2} alignItems="center">
                <PhoneIcon fontSize="xs" />
                <Link position="relative" bottom="1px" href="tel:+082141249820">
                  +08214 12498 20
                </Link>
              </Flex>
              <Flex gap={2} alignItems="center">
                <EmailIcon fontSize="xs" />
                <Link
                  position="relative"
                  bottom="1px"
                  href="mailto:test@test.com"
                >
                  test@test.com
                </Link>
              </Flex>
            </Stack>
          </GridItem>
          <GridItem>
            <Stack spacing={4}>
              <Box>
                <Heading my={2} as="h5" fontSize="xl">
                  Find us
                </Heading>
                <Text fontSize="sm" mb={4}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quam, illo.
                </Text>
                <Button
                  target="_blank"
                  as={NextLink}
                  href={fakeLink}
                  size="sm"
                  variant="outline"
                >
                  View on map
                </Button>
              </Box>
              <Box>
                <Heading my={2} as="h5" fontSize="xl">
                  Opening hours
                </Heading>
                <Text>13-20</Text>
              </Box>
            </Stack>
          </GridItem>
          <GridItem colSpan={2}>
            <Center height="100%">
              <Image src={logo} width={200} height={200} alt="logo" />
            </Center>
          </GridItem>
        </SimpleGrid>
      </Container>
      <Flex w="100%" h="40px" bg="red.900" alignItems="center">
        <Container maxW="container.xl">
          <Text ml={2}>© {new Date().getFullYear()}</Text>
        </Container>
      </Flex>
    </Box>
  )
}
