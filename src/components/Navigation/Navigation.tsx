import React, { ReactElement } from 'react'
import { HamburgerIcon } from '@chakra-ui/icons'
import Image from 'next/image'
import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  IconButton,
  Link,
  useDisclosure,
  Container,
  VStack,
  Text,
  Flex,
} from '@chakra-ui/react'
import { PhoneIcon } from '@chakra-ui/icons'
import { EmailIcon } from '@chakra-ui/icons'
import { CalendarIcon } from '@chakra-ui/icons'

interface Props {
  menuItems: Array<{
    label: string
    sectionId: string
  }>
  logoSrc?: string
}

const ServiceMenu = () => (
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

export default function Navigation({
  menuItems,
  logoSrc,
}: Props): ReactElement {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <ServiceMenu />
      <Box
        as="nav"
        zIndex={100}
        boxShadow="lg"
        position="sticky"
        top={0}
        width="100%"
        backgroundColor="white"
        borderBottomStyle="solid"
        borderBottomWidth={2}
        borderBottomColor="gray.100"
        height="70px"
      >
        <Container
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          maxW="container.xl"
          height="100%"
          px={4}
        >
          <Link
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            {logoSrc && (
              <Image src={logoSrc} alt="logo" width={75} height={50} />
            )}
          </Link>
          <HStack
            alignItems="center"
            spacing={10}
            display={{ base: 'none', md: 'flex' }}
          >
            {menuItems.map((menuItem) => (
              <Button
                key={menuItem.sectionId}
                variant="link"
                onClick={() => {
                  document
                    .getElementById(menuItem.sectionId)
                    ?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                {menuItem.label}
              </Button>
            ))}
          </HStack>
          <IconButton
            color="white"
            backgroundColor="brand.100"
            icon={<HamburgerIcon />}
            display={{ md: 'none' }}
            onClick={onOpen}
            aria-label="main menu"
          />
        </Container>
      </Box>
      <Drawer isOpen={isOpen} onClose={onClose} placement="left">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <VStack as="nav" spacing={4} divider={<Divider />}>
              {menuItems.map((menuItem, i) => (
                <Box width="100%" textAlign="center" key={i} height="100%">
                  <Button
                    key={menuItem.sectionId}
                    variant="link"
                    onClick={() => {
                      document
                        .getElementById(menuItem.sectionId)
                        ?.scrollIntoView({ behavior: 'smooth' })
                    }}
                  >
                    {menuItem.label}
                  </Button>
                </Box>
              ))}
            </VStack>
          </DrawerBody>
          <DrawerFooter>
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
          </DrawerFooter>
          <DrawerCloseButton />
        </DrawerContent>
      </Drawer>
    </>
  )
}
