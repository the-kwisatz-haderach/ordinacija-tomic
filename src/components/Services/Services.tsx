import React from 'react'
import {
  Container,
  GridItem,
  Heading,
  SimpleGrid,
  Text,
} from '@chakra-ui/react'
import Service from '@components/Service/Service'

type Props = {}

const services: Array<{
  title: string
  description: string
  imageSrc: string
}> = [
  {
    title: 'EKG',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem debitis perferendis eaque assumenda quidem repellendus quam quasi odit. Assumenda, dolores.',
    imageSrc: 'https://picsum.photos/200/300',
  },
  {
    title: 'Ultrazvuk ',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem debitis perferendis eaque assumenda quidem repellendus quam quasi odit. Assumenda, dolores.',
    imageSrc: 'https://picsum.photos/200/300',
  },
  {
    title: 'EKG',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem debitis perferendis eaque assumenda quidem repellendus quam quasi odit. Assumenda, dolores.',
    imageSrc: 'https://picsum.photos/200/300',
  },
  {
    title: 'EKG',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem debitis perferendis eaque assumenda quidem repellendus quam quasi odit. Assumenda, dolores.',
    imageSrc: 'https://picsum.photos/200/300',
  },
  {
    title: 'EKG',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem debitis perferendis eaque assumenda quidem repellendus quam quasi odit. Assumenda, dolores.',
    imageSrc: 'https://picsum.photos/200/300',
  },
  {
    title: 'EKG',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    imageSrc: 'https://picsum.photos/200/300',
  },
  {
    title: 'EKG',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem debitis perferendis eaque assumenda quidem repellendus.',
    imageSrc: 'https://picsum.photos/200/300',
  },
]

export default function Services({}: Props) {
  return (
    <Container maxW="container.xl">
      <Heading size="2xl" mt={10} mb={8}>
        Our services
      </Heading>
      <Text fontSize="lg" mb={10}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum animi
        aspernatur dolorum! Placeat at eum sint eius, id amet. Laborum.
      </Text>
      <SimpleGrid columns={[1, 2, 3, 2]} spacing={4}>
        {services.map((service, i) => (
          <GridItem key={i}>
            <Service {...service} />
          </GridItem>
        ))}
      </SimpleGrid>
    </Container>
  )
}
