import React from 'react'
import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import aboutUsImg from '../../images/hero_1.png'

type Props = {}

export default function About({}: Props) {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      pt={{ lg: 10 }}
      flexDir={{
        base: 'column',
        lg: 'row',
      }}
    >
      <Box
        position="relative"
        width={{ base: '100%', lg: 600 }}
        height={{ base: 250, lg: 450 }}
        bottom={{ lg: '20px' }}
        left={{ lg: 20 }}
      >
        <Image
          src={aboutUsImg}
          alt=""
          fill
          style={{
            objectFit: 'cover',
          }}
        />
      </Box>
      <Stack
        position="relative"
        spacing={0}
        alignItems="center"
        justifyContent="center"
      >
        <Stack
          position="relative"
          right={{ lg: 20 }}
          bg="linear-gradient(140deg, var(--chakra-colors-red-700), var(--chakra-colors-red-500))"
          color="white"
          px={{ base: 6, lg: 10 }}
          py={[12, 10]}
          h="fit-content"
          maxW={{ lg: '600px' }}
          boxShadow="xl"
          spacing={4}
        >
          <Heading fontSize="4xl">O NAMA</Heading>
          <Text>
            Ordinacija Tomić je privatna internistička ordinacija s tradicijom
            dužom od dva desetljeća. Počeli smo s radom 2000. godine na adresi
            Kranjčevićeva 14 u Širokom Brijegu gdje se nalazimo i danas, a
            osnivač ordinacije je prim. prof. dr. sc. Monika Tomić.
          </Text>
          <Text>
            Ordinacija TOMIĆ pacijentima pruža širok spektar medicinskih i
            dijagnostičkih usluga iz oblasti interne medicine. Koncipirana je
            kao ustanova koja može dijagnostički i terapijski zbrinuti bolesnike
            iz područja unutarnjih bolesti s naglaskom na zbrinjavanje složenih
            bolesnika koji uzimaju veliki broj lijekova uz odabir
            najracionalnije kombinacije lijekova. Osnovni zadatak ORIDINACIJE
            TOMIĆ je kroz pravodobnu prevenciju, spriječiti razvoj bolesti ili
            je otkriti u što ranijoj fazi kako bi se izbjegla dugotrajna i
            iscrpljujuća dijagnostika i liječenje, a sve sa ciljem ozdravljenja
            i održavanja kvalitete života.
          </Text>
          <Text>
            U ordinaciji TOMIĆ pacijenti će dobiti najbolju moguću liječničku
            skrb, bez potrebe za dugim čekanjem. Opremljeni smo najmodernijim
            medicinskim uređajima, a cilj nam je pružiti usluge suvremene
            medicine koja je zasnovana na dokazima i koje su prilagođene
            potrebama pacijenata. Etičnost, profesionalnost i vrhunska kvaliteta
            su ono što nas čini ustanovom od povjerenja već dugi niz godina.
          </Text>
        </Stack>
      </Stack>
    </Flex>
  )
}
