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
  ButtonProps,
} from '@chakra-ui/react'
import { ServiceMenu } from './ServiceMenu'

interface Props {
  menuItems: Array<{
    label: string
    sectionId: string
    variant?: ButtonProps['variant']
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
                variant={menuItem.variant || 'link'}
                colorScheme="red"
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
            icon={<HamburgerIcon fontSize="xl" />}
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
                        ?.scrollIntoView()
                      onClose()
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
