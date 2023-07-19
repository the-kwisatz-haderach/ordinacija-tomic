import {
  Box,
  Button,
  Container,
  Flex,
  GridItem,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  Radio,
  RadioGroup,
  Select,
  SimpleGrid,
  Stack,
  Tag,
  Text,
  useToast,
} from '@chakra-ui/react'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { PhoneIcon, AttachmentIcon, EmailIcon } from '@chakra-ui/icons'
import { useTranslations } from 'next-intl'

const serviceOptions = [
  { value: '1', label: 'Kardiološki pregled' },
  { value: '2', label: 'Nefrološki pregled' },
  { value: '3', label: 'Endokrinološki pregled' },
  { value: '4', label: 'Reumatološki pregled' },
  { value: '5', label: 'Imunološki pregled' },
  { value: '6', label: 'Hematološki pregled' },
  { value: '7', label: 'Ostale usluge' },
]

export default function Contact() {
  const t = useTranslations('Home')
  const fileInput = useRef<HTMLInputElement>(null)
  const [files, setFiles] = useState<string[]>([])
  const toast = useToast()
  const onSubmit = useCallback(
    (e: any) => {
      e.preventDefault()
      const form = e.currentTarget
      const url = new URL(form.action)
      const formData = new FormData(form)
      formData.set(
        'service',
        serviceOptions.find(
          (option) => option.value === e.target?.elements.service.value
        )?.label || ''
      )

      const fetchOptions = {
        method: form.method,
        body: formData,
      }

      if (form.method.toLowerCase() === 'post') {
        if (form.enctype === 'multipart/form-data') {
          fetchOptions.body = formData
        }
      }

      const body = {
        firstname: e.target?.elements.firstname.value,
        lastname: e.target?.elements.lastname.value,
        email: e.target?.elements.email.value,
        phone: e.target?.elements.phone.value,
        preferred_way_of_contact:
          e.target?.elements.preferred_way_of_contact.value,
        service:
          serviceOptions.find(
            (option) => option.value === e.target?.elements.service.value
          )?.label || '',
      }
      if (Object.values(body).some((value) => !value)) {
        return
      }
      return fetch(url.pathname, fetchOptions).then((res) => {
        if (res.ok) {
          e.target.reset()
          setFiles([])
          toast({
            title: t('contact_toast_success_title'),
            description: t('contact_toast_success'),
            status: 'success',
            isClosable: true,
            position: 'top',
            duration: 7000,
          })
        } else {
          toast({
            title: t('contact_toast_failure_title'),
            description: t('contact_toast_failure'),
            status: 'error',
            isClosable: true,
            position: 'top',
            duration: 5000,
          })
        }
      })
    },
    [t, toast]
  )

  useEffect(() => {
    const listener = (e: any) => {
      setFiles([...(e?.target?.files || [])].map((file: any) => file.name))
    }
    if (fileInput?.current) {
      document.addEventListener('change', listener)
    }
    return () => {
      document.removeEventListener('change', listener)
    }
  }, [])

  const handleFileUpload = useCallback(() => {
    fileInput?.current?.click?.()
  }, [])

  const focusSibling = useCallback((e: any) => {
    e.target.nextElementSibling.focus()
  }, [])

  return (
    <Box py={10}>
      <Container
        borderRadius={3}
        maxW="1000px"
        textAlign="center"
        bg="white"
        px={{ base: 4, md: 10 }}
      >
        <Heading fontSize="4xl" my={4}>
          {t('contact_us_title')}
        </Heading>
        <Text fontSize="lg">{t('contact_us_subtitle')}</Text>
        <Box mt={[6, 10]} borderRadius={20}>
          <Flex
            as="form"
            flexDir="column"
            onSubmit={onSubmit}
            action="/api/upload"
            encType="multipart/form-data"
            method="post"
          >
            <SimpleGrid columns={[1, 1, 2]} spacing={4}>
              <GridItem>
                <InputGroup>
                  <InputLeftAddon w="90px" ml={2} onClick={focusSibling}>
                    {t('firstname')}
                  </InputLeftAddon>
                  <Input
                    required
                    name="firstname"
                    type="text"
                    autoComplete="given-name"
                  />
                </InputGroup>
              </GridItem>
              <GridItem order={[1, 1, 'unset']}>
                <InputGroup>
                  <InputLeftAddon ml={2} onClick={focusSibling}>
                    <EmailIcon
                      style={{
                        pointerEvents: 'none',
                      }}
                    />
                  </InputLeftAddon>
                  <Input
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    placeholder={t('email')}
                  />
                </InputGroup>
              </GridItem>
              <GridItem>
                <InputGroup>
                  <InputLeftAddon w="90px" ml={2} onClick={focusSibling}>
                    {t('lastname')}
                  </InputLeftAddon>
                  <Input
                    required
                    type="text"
                    name="lastname"
                    autoComplete="family-name"
                  />
                </InputGroup>
              </GridItem>
              <GridItem>
                <InputGroup>
                  <InputLeftAddon ml={2} onClick={focusSibling}>
                    <PhoneIcon
                      style={{
                        pointerEvents: 'none',
                      }}
                    />
                  </InputLeftAddon>
                  <Input
                    type="tel"
                    required
                    name="phone"
                    autoComplete="tel"
                    pattern="\+?([0-9]|\s)+"
                    placeholder={t('phone')}
                  />
                </InputGroup>
              </GridItem>
              <GridItem pl={2} order={4}>
                <Stack spacing={3}>
                  <Select
                    name="service"
                    variant="filled"
                    placeholder="Usluge"
                    size="md"
                  >
                    {serviceOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </Select>
                </Stack>
              </GridItem>
              <GridItem
                order={4}
                display="flex"
                px={{ base: 4, md: 0 }}
                alignItems="center"
                justifyContent={{ md: 'center' }}
              >
                <RadioGroup
                  name="preferred_way_of_contact"
                  defaultValue="telefon"
                >
                  <Stack
                    spacing={[2, 4]}
                    direction={['column', 'column', 'row']}
                  >
                    <Text fontSize={['sm', 'md']} fontWeight="bold">
                      {t('preferred_way_of_contact')}:
                    </Text>
                    <Radio value="telefon">Telefon</Radio>
                    <Radio value="email">Email</Radio>
                  </Stack>
                </RadioGroup>
              </GridItem>
              <GridItem order={5} colSpan={[1, 2]}>
                <Flex mx={2} gap={[2, 8]} justifyContent="space-between">
                  <input
                    ref={fileInput}
                    style={{ display: 'none' }}
                    type="file"
                    name="file"
                    accept="image/png, image/jpeg, application/pdf"
                    multiple
                  />
                  <Button
                    leftIcon={<AttachmentIcon />}
                    colorScheme="blackAlpha"
                    onClick={handleFileUpload}
                  >
                    {t('upload_files')}
                  </Button>
                  <Button type="submit" colorScheme="red">
                    {t('submit')}
                  </Button>
                </Flex>
              </GridItem>
            </SimpleGrid>
            <Flex m={2} columnGap={4} alignItems="center" flexWrap="wrap">
              {files.map((file) => (
                <Text fontSize="sm" key={file}>
                  {file}
                </Text>
              ))}
            </Flex>
          </Flex>
        </Box>
      </Container>
    </Box>
  )
}
