import {
  Button,
  Flex,
  FlexProps,
  Heading,
  Stack,
  StackProps,
  Text,
  Link,
  Box,
} from '@chakra-ui/react'
import { useTranslations } from 'next-intl'
import { PhoneIcon, EmailIcon, CalendarIcon } from '@chakra-ui/icons'
import React, { PropsWithChildren } from 'react'

type DetailBoxProps = PropsWithChildren<StackProps & { title: string }>

const DetailBox: React.FC<DetailBoxProps> = ({ children, title, ...props }) => (
  <Stack {...props} py={10} px={[6, 12]} gap={2}>
    <Heading as="h4" fontSize="xl">
      {title}
    </Heading>
    {children}
  </Stack>
)

export default function BusinessDetails() {
  const t = useTranslations('Home')
  return (
    <DetailBox pos="relative" zIndex={2} title={t('contact_us')}>
      <Text mt={0}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, illo.
      </Text>
      <Stack mt={4} spacing={2}>
        <Flex gap={2} alignItems="center">
          <PhoneIcon fontSize="lg" />
          <Link
            position="relative"
            bottom="1px"
            href={`tel:${t('phone_number')}`}
          >
            {t('phone_number')}
          </Link>
        </Flex>
        <Flex gap={2} alignItems="center">
          <EmailIcon fontSize="lg" />
          <Link
            position="relative"
            bottom="1px"
            href={`mailto:${t('email_address')}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('email_address')}
          </Link>
        </Flex>
        <Flex gap={2} alignItems="center">
          <CalendarIcon fontSize="lg" />
          {t('opening_hours')} {t('opening_hours_time')}
        </Flex>
      </Stack>
    </DetailBox>
  )
}
