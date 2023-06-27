import React from 'react'
import { Box, Container, Flex, Heading, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import aboutUsImg from '../../images/about-us.png'

type Props = {}

export default function About({}: Props) {
  return (
    <Flex justifyContent="center" alignItems="center" flexDir="column" py={10}>
      <Container
        maxW="container.md"
        bg="white"
        px={[4, 16]}
        py={20}
        boxShadow="2xl"
      >
        <Flex
          display="inline-flex"
          alignItems="center"
          flexDir={{ base: 'column', md: 'row' }}
          flexWrap="wrap"
          gap={8}
          mb={6}
        >
          <Box
            height={250}
            w="100%"
            maxW={300}
            position="relative"
            border="1px solid rgba(0,0,0,0.15)"
          >
            <Image
              alt=""
              fill
              src={aboutUsImg}
              style={{
                objectFit: 'cover',
              }}
            />
          </Box>
          <Box flex={1}>
            <Heading
              width="fit-content"
              fontSize="4xl"
              mb={3}
              color="blackAlpha.300"
            >
              O nama
            </Heading>
            <Text lineHeight={1.8}>
              <span
                style={{
                  fontWeight: 'bold',
                }}
              >
                Ordinacija Tomić
              </span>{' '}
              je privatna internistička ordinacija s tradicijom dužom od dva
              desetljeća. Počeli smo s radom 2000. godine na adresi
              Kranjčevićeva 14 u Širokom Brijegu gdje se nalazimo i danas, a
              osnivač ordinacije je prim. prof. dr. sc. Monika Tomić.
            </Text>
          </Box>
        </Flex>
        <Text lineHeight={1.8} mb={6}>
          Ordinacija TOMIĆ pacijentima pruža širok spektar medicinskih i
          dijagnostičkih usluga iz oblasti interne medicine. Koncipirana je kao
          ustanova koja može dijagnostički i terapijski zbrinuti bolesnike iz
          područja unutarnjih bolesti s naglaskom na zbrinjavanje složenih
          bolesnika koji uzimaju veliki broj lijekova uz odabir najracionalnije
          kombinacije lijekova. Osnovni zadatak ORIDINACIJE TOMIĆ je kroz
          pravodobnu prevenciju, spriječiti razvoj bolesti ili je otkriti u što
          ranijoj fazi kako bi se izbjegla dugotrajna i iscrpljujuća
          dijagnostika i liječenje, a sve sa ciljem ozdravljenja i održavanja
          kvalitete života.
        </Text>
        <Text lineHeight={1.8}>
          U ordinaciji TOMIĆ pacijenti će dobiti najbolju moguću liječničku
          skrb, bez potrebe za dugim čekanjem. Opremljeni smo najmodernijim
          medicinskim uređajima, a cilj nam je pružiti usluge suvremene medicine
          koja je zasnovana na dokazima i koje su prilagođene potrebama
          pacijenata. Etičnost, profesionalnost i vrhunska kvaliteta su ono što
          nas čini ustanovom od povjerenja već dugi niz godina.
        </Text>
      </Container>
    </Flex>
  )
}
