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
  InputLeftElement,
  SimpleGrid,
  Text,
  useToast,
} from '@chakra-ui/react'
import React, { useCallback } from 'react'
import { PhoneIcon } from '@chakra-ui/icons'
import { EmailIcon } from '@chakra-ui/icons'

type Props = {}

export default function Contact({}: Props) {
  const toast = useToast()
  const onSubmit = useCallback(
    (e: any) => {
      e.preventDefault()
      const form = e.currentTarget
      const url = new URL(form.action)
      const formData = new FormData(form)

      const fetchOptions = {
        method: form.method,
        body: formData,
      }

      console.log(url)

      // if (form.method.toLowerCase() === 'post') {
      //   if (form.enctype === 'multipart/form-data') {
      //     fetchOptions.body = formData
      //   }
      // }

      // const body = {
      //   firstname: e.target?.elements.firstname.value,
      //   lastname: e.target?.elements.lastname.value,
      //   email: e.target?.elements.email.value,
      //   phone: e.target?.elements.phone.value,
      // }
      // if (Object.values(body).some((value) => !value)) {
      //   return
      // }
      return fetch(url.pathname, fetchOptions).then((res) => {
        if (res.ok) {
          // e.target.reset()
          toast({
            title: 'Form submitted',
            description:
              'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, pariatur.',
            status: 'success',
            isClosable: true,
            position: 'top',
          })
        }
      })
    },
    [toast]
  )

  return (
    <Container maxW="800px" px={{ base: 6, lg: 0 }} textAlign="center">
      <Heading fontSize="4xl" my={4}>
        Contact us
      </Heading>
      <Text fontSize="lg">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam animi
        accusamus beatae ab asperiores.
      </Text>
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
                <InputLeftAddon w="90px" ml={2}>
                  Ime
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
                <InputLeftAddon ml={2}>
                  <EmailIcon />
                </InputLeftAddon>
                <Input
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="Email"
                />
              </InputGroup>
            </GridItem>
            <GridItem>
              <InputGroup>
                <InputLeftAddon w="90px" ml={2}>
                  Prezime
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
                <InputLeftAddon ml={2}>
                  <PhoneIcon />
                </InputLeftAddon>
                <Input
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  pattern="\+?([0-9]|\s)+"
                  placeholder="Telefon"
                />
              </InputGroup>
            </GridItem>
            <GridItem>
              <input
                type="file"
                name="file"
                accept="image/png, image/jpeg"
                multiple
              />
            </GridItem>
          </SimpleGrid>
          <Button
            type="submit"
            size="lg"
            colorScheme="red"
            alignSelf="flex-end"
            my={4}
          >
            Submit
          </Button>
        </Flex>
      </Box>
    </Container>
  )
}
