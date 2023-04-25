import React from 'react'
import { Box, Link, Container, Text, Flex } from '@chakra-ui/react'
import { PhoneIcon } from '@chakra-ui/icons'
import { EmailIcon } from '@chakra-ui/icons'
import { CalendarIcon } from '@chakra-ui/icons'

export const ServiceMenu = () => (
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
      color="white"
      position="relative"
      bottom="1px"
    >
      <Box
        display={{ base: 'none', md: 'block' }}
        fontSize={{ base: 'xs', md: 'sm' }}
      >
        <Text>Ordinacija Tomic</Text>
      </Box>
      <Flex alignItems="center" gap={7} fontSize={{ base: 'xs', md: 'sm' }}>
        <Flex gap={2} alignItems="center">
          <PhoneIcon fontSize="xs" />
          <Link position="relative" bottom="1px" href="tel:+082141249820">
            +08214 12498 20
          </Link>
        </Flex>
        <Flex gap={2} alignItems="center">
          <EmailIcon fontSize="xs" />
          <Link position="relative" bottom="1px" href="mailto:test@test.com">
            test@test.com
          </Link>
        </Flex>
        <Flex gap={2} alignItems="center">
          <CalendarIcon fontSize="xs" />
          <Text position="relative" bottom="1px">
            Opening hours: 13-20
          </Text>
        </Flex>
      </Flex>
    </Container>
  </Box>
)