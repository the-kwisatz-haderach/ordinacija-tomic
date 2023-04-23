import React from 'react'
import {
  Container,
  Grid,
  GridItem,
  Heading,
  SimpleGrid,
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
    <Container maxW="container.xl" py={8}>
      <Heading size="2xl" my={10}>
        Our services
      </Heading>
      <SimpleGrid minChildWidth={['200px', '350px', '450px']} spacing={6}>
        {services.map((service, i) => (
          <GridItem key={i}>
            <Service {...service} />
          </GridItem>
        ))}
      </SimpleGrid>
    </Container>
  )
}
