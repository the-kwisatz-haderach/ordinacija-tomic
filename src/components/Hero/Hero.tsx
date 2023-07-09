import React, { PropsWithChildren, ReactElement } from 'react'
import { Box, Container } from '@chakra-ui/layout'
import { BoxProps, Button, Flex, Heading, Link, Text } from '@chakra-ui/react'
import Image from 'next/image'
import heroImg from '../../images/hero_1.png'
import {
  CalendarIcon,
  ChatIcon,
  ExternalLinkIcon,
  TimeIcon,
} from '@chakra-ui/icons'
import { useTranslations } from 'next-intl'
import styles from './Hero.module.css'

type Props = {}

const DetailBox: React.FC<
  PropsWithChildren<
    BoxProps & {
      Icon: ReactElement
      title: string
    }
  >
> = ({ children, title, Icon, ...boxProps }) => (
  <Box
    display="flex"
    minW={['100%', 360]}
    flexDir="column"
    flex={1}
    bg="white"
    border={{ md: '1px solid #80808038' }}
    {...boxProps}
    p={[6, 10]}
    w="100%"
    height="100%"
    borderRadius={3}
  >
    <Flex gap={3} h="fit-content">
      {Icon}
      <Box>
        <Heading mt={1} mb={4} as="h4" fontSize={['xl', '2xl']}>
          {title}
        </Heading>
        {children}
      </Box>
    </Flex>
  </Box>
)

export default function Hero({}: Props) {
  const t = useTranslations('Home')
  return (
    <Container maxW={2000} p={0} mb={-100}>
      <Box
        height={560}
        width="100%"
        pos="relative"
        display="flex"
        maxH={[400, 'unset']}
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
        <Box
          display="flex"
          pos="relative"
          width="100%"
          height="inherit"
          maxH={[400, 'unset']}
          alignItems="flex-end"
        >
          <Container
            zIndex={10}
            maxW="container.xl"
            position="relative"
            color="white"
            mb={{ base: 12, md: 0 }}
            bottom="80px"
          >
            <Heading
              maxW={{ md: '90%' }}
              as="h1"
              pos="relative"
              left={-1}
              lineHeight={1}
              fontSize={['4xl', '6xl', '7xl', '8xl']}
              mb={6}
            >
              {t('hero_title')}
            </Heading>
            <Text fontSize={['xl', '3xl', '4xl', '5xl']} mb={16}>
              {t('hero_subtitle')}
            </Text>
          </Container>
          <Image
            alt="hero"
            fill
            priority
            style={{
              objectFit: 'cover',
              objectPosition: '90% center',
            }}
            src={heroImg}
          />
        </Box>
      </Box>
      <Box w="100%" zIndex={2} position="relative" bottom="100">
        <Container
          maxW="container.xl"
          display="flex"
          gap={{ md: 4 }}
          p={{ base: 0, md: 4 }}
          alignItems="center"
          height="100%"
          flexWrap="wrap"
        >
          <DetailBox
            title={t('contact_us')}
            Icon={<ChatIcon mr={4} fontSize={['4xl', '5xl']} />}
          >
            <Box
              lineHeight={1.6}
              flex={1}
              display="flex"
              justifyContent="center"
              flexDir="column"
            >
              <Text fontSize={['md', 'lg']} h="100%">
                {t('phone_number')}
              </Text>
              <Text fontSize={['md', 'lg']} h="100%">
                {t('email_address')}
              </Text>
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
            </Box>
          </DetailBox>
          <DetailBox
            bg="gray.100"
            title={t('opening_hours')}
            Icon={<TimeIcon mr={4} fontSize={['4xl', '5xl']} />}
          >
            <Box
              lineHeight={1.6}
              flex={1}
              display="flex"
              justifyContent="center"
              flexDir="column"
            >
              <Text fontSize={['md', 'lg']} h="100%">
                <b>Pon - Pet:</b> {t('opening_hours_time')}
              </Text>
              <Text fontSize={['md', 'lg']} h="100%">
                <b>Sub - Ned:</b> Zatvoreno
              </Text>
              <Text fontSize={['md', 'lg']} h="100%">
                <b>Državni praznik:</b> Zatvoreno
              </Text>
            </Box>
          </DetailBox>
          <DetailBox
            color="white"
            bg="gray.600"
            title={t('appointments')}
            Icon={<CalendarIcon mr={4} fontSize={['4xl', '5xl']} />}
          >
            <Box
              lineHeight={1.6}
              flex={1}
              display="flex"
              justifyContent="center"
              flexDir="column"
            >
              <Text fontSize={['md', 'lg']} h="100%">
                {t('fill_in_form')}.
              </Text>
              <Button
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({
                    behavior: 'smooth',
                  })
                }}
                mt={4}
                colorScheme="red"
              >
                {t('order')}
              </Button>
            </Box>
          </DetailBox>
        </Container>
      </Box>
    </Container>
  )
}
