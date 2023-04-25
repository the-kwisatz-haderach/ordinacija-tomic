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
} from '@chakra-ui/react'
import React from 'react'
import { PhoneIcon } from '@chakra-ui/icons'
import { EmailIcon } from '@chakra-ui/icons'

type Props = {}

export default function Contact({}: Props) {
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
        <Flex as="form" flexDir="column">
          <SimpleGrid columns={[1, 1, 2]} spacing={4}>
            <GridItem>
              <InputGroup>
                <InputLeftAddon w="90px" ml={2}>
                  Ime
                </InputLeftAddon>
                <Input required type="text" autoComplete="given-name" />
              </InputGroup>
            </GridItem>
            <GridItem order={[1, 1, 'unset']}>
              <InputGroup>
                <InputLeftAddon ml={2}>
                  <EmailIcon />
                </InputLeftAddon>
                <Input type="email" autoComplete="email" placeholder="Email" />
              </InputGroup>
            </GridItem>
            <GridItem>
              <InputGroup>
                <InputLeftAddon w="90px" ml={2}>
                  Prezime
                </InputLeftAddon>
                <Input required type="text" autoComplete="family-name" />
              </InputGroup>
            </GridItem>
            <GridItem>
              <InputGroup>
                <InputLeftAddon ml={2}>
                  <PhoneIcon />
                </InputLeftAddon>
                <Input type="tel" autoComplete="tel" placeholder="Telefon" />
              </InputGroup>
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
