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
import NextLink from 'next/link'
import { PhoneIcon, EmailIcon, CalendarIcon } from '@chakra-ui/icons'
import React, { PropsWithChildren } from 'react'

interface Props extends FlexProps {}

type DetailBoxProps = PropsWithChildren<StackProps & { title: string }>

const DetailBox: React.FC<DetailBoxProps> = ({ children, title, ...props }) => (
  <Stack {...props} py={10} px={[6, 12]} gap={2}>
    <Heading as="h4" fontSize="xl">
      {title}
    </Heading>
    {children}
  </Stack>
)

export default function BusinessDetails({ ...flexProps }: Props) {
  const t = useTranslations('Home')
  return (
    <Flex justifyContent="center" w="100%" {...flexProps}>
      <Stack
        direction={['column', 'column', 'row']}
        spacing={0}
        overflow="hidden"
        border="1px solid #e5e5e5"
      >
        <DetailBox
          width={['100%', '100%', '50%']}
          bg="white"
          title={t('contact_us')}
          borderRight="1px solid #e5e5e5"
        >
          <Text mt={0}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam,
            illo.
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
              >
                {t('email_address')}
              </Link>
            </Flex>
            <Flex gap={2} alignItems="center">
              <CalendarIcon fontSize="lg" />
              {t('opening_hours')} 13-20
            </Flex>
          </Stack>
        </DetailBox>
        <Box width={['100%', '100%', '50%']} minH={250}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2899.4827348286744!2d17.589274176626027!3d43.387838671115865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134b3f9acc9f37ab%3A0xa0adb5182564bd69!2sOrdinacija%20Tomi%C4%87!5e0!3m2!1sen!2sse!4v1687031249684!5m2!1sen!2sse"
            width="100%"
            height="100%"
            // style="border:0;"
            // allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Box>
        {/* <DetailBox title={t('find_us')} bgColor="white">
          <Text>Lorem ipsum dolor sit amet.</Text>
          <Button
            borderRadius={6}
            width="fit-content"
            href="#"
            as={NextLink}
            variant="outline"
          >
            {t('view_on_map')}
          </Button>
        </DetailBox> */}
        {/* <DetailBox bg="red.700" title={t('opening_hours')}>
          <Text>Lorem ipsum dolor sit amet.</Text>
        </DetailBox> */}
      </Stack>
    </Flex>
  )
}
