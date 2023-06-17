import {
  Button,
  Flex,
  FlexProps,
  Heading,
  Stack,
  StackProps,
  Text,
} from '@chakra-ui/react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import React, { PropsWithChildren } from 'react'

interface Props extends FlexProps {}

type DetailBoxProps = PropsWithChildren<StackProps & { title: string }>

const DetailBox: React.FC<DetailBoxProps> = ({ children, title, ...props }) => (
  <Stack {...props} width="350px" height="220px" color="white" p={10} gap={2}>
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
        direction={['column', 'row']}
        spacing={0}
        borderRadius={8}
        overflow="hidden"
      >
        <DetailBox bg="red.400" title={t('contact_us')}>
          <Text>Lorem ipsum dolor sit amet.</Text>
        </DetailBox>
        <DetailBox bg="red.600" title={t('find_us')}>
          <Text>Lorem ipsum dolor sit amet.</Text>
          <Button
            borderRadius={6}
            width="fit-content"
            href="#"
            as={Link}
            variant="outline"
          >
            {t('view_on_map')}
          </Button>
        </DetailBox>
        <DetailBox bg="red.700" title={t('opening_hours')}>
          <Text>Lorem ipsum dolor sit amet.</Text>
        </DetailBox>
      </Stack>
    </Flex>
  )
}
