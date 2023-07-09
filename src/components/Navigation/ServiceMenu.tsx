import React from 'react'
import { Box, Link, Container, Text, Flex } from '@chakra-ui/react'
import { PhoneIcon } from '@chakra-ui/icons'
import { EmailIcon } from '@chakra-ui/icons'
import { CalendarIcon } from '@chakra-ui/icons'
import { useTranslations } from 'next-intl'

export const ServiceMenu = () => {
  const t = useTranslations('Home')
  return (
    <Box
      width="100%"
      height={30}
      bg="brand.100"
      display={{ base: 'none', sm: 'block' }}
    >
      <Container
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        maxW="container.xl"
        height="100%"
        px={4}
        position="relative"
        bottom="1px"
      >
        <Box
          display={{ base: 'none', md: 'block' }}
          fontSize={{ base: 'xs', md: 'sm' }}
        >
          <Text>Ordinacija Tomić</Text>
        </Box>
        <Flex alignItems="center" gap={7} fontSize={{ base: 'xs', md: 'sm' }}>
          <Flex gap={2} alignItems="center">
            <PhoneIcon fontSize="xs" />
            <Link href={`tel:${t('phone_number')}`}>{t('phone_number')}</Link>
          </Flex>
          <Flex gap={2} alignItems="center">
            <EmailIcon fontSize="xs" />
            <Link href={`mailto:${t('email_address')}`}>
              {t('email_address')}
            </Link>
          </Flex>
          <Flex gap={2} alignItems="center">
            <CalendarIcon fontSize="xs" />
            <Text>
              {t('opening_hours')}: {t('opening_hours_time')}
            </Text>
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
}
