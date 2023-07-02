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
} from '@chakra-ui/react'
import { ServiceMenu } from './ServiceMenu'
import { useTranslations } from 'next-intl'

interface Props {
  menuItems: Array<{
    label: string
    sectionId: string
    accent?: boolean
  }>
  logoSrc?: string
}

export default function Navigation({
  menuItems,
  logoSrc,
}: Props): ReactElement {
  const t = useTranslations('Home')
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
        borderBottomWidth={1}
        borderBottomColor="gray.100"
        py={1}
        height={{ base: '50px', md: '70px' }}
      >
        <Container
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          maxW="container.xl"
          height="100%"
        >
          <Link
            height="100%"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            {logoSrc && (
              <Box
                width="80px"
                overflow="hidden"
                height="100%"
                position="relative"
              >
                <Image
                  src={logoSrc}
                  alt="logo"
                  fill
                  style={{
                    objectFit: 'contain',
                  }}
                />
              </Box>
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
                color={menuItem.accent ? undefined : 'black'}
                colorScheme={menuItem.accent ? 'red' : undefined}
                variant={menuItem.accent ? 'solid' : 'link'}
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
            backgroundColor="red.600"
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
              {t('close')}
            </Button>
          </DrawerFooter>
          <DrawerCloseButton />
        </DrawerContent>
      </Drawer>
    </>
  )
}
