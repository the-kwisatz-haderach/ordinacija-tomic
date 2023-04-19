import React, { ReactElement } from 'react'
import { HamburgerIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
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
} from '@chakra-ui/react'

interface Props {
  menuItems: Array<{
    label: string
    section: string
  }>
  logoSrc?: string
}

export default function Navigation({
  menuItems,
  logoSrc,
}: Props): ReactElement {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Box
        as="nav"
        zIndex={100}
        boxShadow="lg"
        position="sticky"
        top={-1}
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
          <Link as={NextLink} href="/">
            {logoSrc && <Image src={logoSrc} alt="logo" fill />}
          </Link>
          <HStack
            alignItems="center"
            spacing={10}
            display={{ base: 'none', md: 'flex' }}
          >
            {menuItems.map((menuItem) => (
              <Link
                as={NextLink}
                key={menuItem.section}
                href={`#${menuItem.section}`}
              >
                {menuItem.label}
              </Link>
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
                  <Link as={NextLink} href={`#${menuItem.section}`}>
                    {menuItem.label}
                  </Link>
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
