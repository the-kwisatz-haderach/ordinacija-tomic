import { Box } from '@chakra-ui/layout'
import NextLink from 'next/link'
import {
  Center,
  Container,
  Text,
  Heading,
  SimpleGrid,
  Stack,
  Flex,
  Link,
  Button,
} from '@chakra-ui/react'
import React from 'react'
import logo from '@images/logo-white.svg'
import Image from 'next/image'
import { EmailIcon, PhoneIcon, CalendarIcon } from '@chakra-ui/icons'
import { useTranslations } from 'next-intl'

const googleMapsLink = 'https://goo.gl/maps/7BBwRQmiPhCdqH527'

type Props = {}

export default function Footer({}: Props) {
  const t = useTranslations('Home')
  return (
    <Box
      as="footer"
      height={['100%', '100%', 350]}
      color="white"
      bg="rgb(43 43 43)"
    >
      <Container maxW="container.xl" p={[6, 8]} height="100%">
        <SimpleGrid gap={6} columns={[1, 2, 3]}>
          <Box>
            <Heading my={3} as="h5" fontSize="2xl">
              {t('contact_us')}
            </Heading>
            <Text>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam,
              illo.
            </Text>
            <Stack mt={6} spacing={2}>
              <Flex gap={3} alignItems="center">
                <PhoneIcon fontSize="lg" />
                <Link position="relative" bottom="1px" href="tel:+082141249820">
                  {t('phone_number')}
                </Link>
              </Flex>
              <Flex gap={3} alignItems="center">
                <EmailIcon fontSize="lg" />
                <Link
                  position="relative"
                  bottom="1px"
                  href="mailto:test@test.com"
                >
                  {t('email_address')}
                </Link>
              </Flex>
              <Flex gap={3} alignItems="center">
                <CalendarIcon fontSize="lg" />
                {t('opening_hours')} 13-20
              </Flex>
            </Stack>
          </Box>
          {/* <Box>
            <Stack spacing={4}>
              <Box>
                <Heading my={3} as="h5" fontSize="2xl">
                  {t('find_us')}
                </Heading>
                <Text fontSize="sm" mb={4}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quam, illo.
                </Text> */}
          {/* <Button
                  target="_blank"
                  as={NextLink}
                  href={googleMapsLink}
                  size="sm"
                  variant="outline"
                >
                  {t('view_on_map')}
                </Button> */}
          {/* <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2899.4827348286744!2d17.589274176626027!3d43.387838671115865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134b3f9acc9f37ab%3A0xa0adb5182564bd69!2sOrdinacija%20Tomi%C4%87!5e0!3m2!1sen!2sse!4v1687031249684!5m2!1sen!2sse"
                  width="100%"
                  height="200"
                  // style="border:0;"
                  // allowfullscreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                /> */}
          {/* </Box>
            </Stack>
          </Box> */}
          <Center height={300} overflow="hidden">
            <Image src={logo} width={300} height={300} alt="logo" />
          </Center>
        </SimpleGrid>
      </Container>
      <Flex w="100%" h="40px" bg="blackAlpha.900" alignItems="center">
        <Container maxW="container.xl">
          <Text fontSize="sm" ml={2}>
            © Ordinacija Tomić {new Date().getFullYear()}
          </Text>
        </Container>
      </Flex>
    </Box>
  )
}
