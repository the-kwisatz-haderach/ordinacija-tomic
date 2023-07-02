import { Box } from '@chakra-ui/layout'
import {
  Center,
  Container,
  Text,
  Heading,
  SimpleGrid,
  Stack,
  Flex,
  Link,
} from '@chakra-ui/react'
import React from 'react'
import logo from '@images/logo-white.svg'
import Image from 'next/image'
import { EmailIcon, PhoneIcon, ExternalLinkIcon } from '@chakra-ui/icons'
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
              {t('contact')}
            </Heading>
            <Text>{t('footer_text')}</Text>
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
                <Link
                  href="https://www.google.com/maps/dir//Ordinacija+Tomi%C4%87+Silvija+Strahimira+Kranj%C4%8Devi%C4%87a+14+%C5%A0iroki+Brijeg+88220+Bosnia+%26+Herzegovina/@43.3878387,17.5918491,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x134b3f9acc9f37ab:0xa0adb5182564bd69!2m2!1d17.5918491!2d43.3878387?entry=ttu"
                  isExternal
                  color="red.500"
                  fontSize={['md', 'lg']}
                  h="100%"
                >
                  {t('view_on_map')}{' '}
                  <ExternalLinkIcon position="relative" bottom="1px" mx="2px" />
                </Link>
              </Flex>
            </Stack>
          </Box>
          <Box lineHeight={1.8}>
            <Heading my={3} as="h5" fontSize="2xl">
              {t('opening_hours')}
            </Heading>
            <Text>
              <b>Pon - Pet:</b> {t('opening_hours_time')}
            </Text>
            <Text>
              <b>Sub - Ned:</b> Zatvoreno
            </Text>
            <Text>
              <b>Državni praznik:</b> Zatvoreno
            </Text>
          </Box>
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
