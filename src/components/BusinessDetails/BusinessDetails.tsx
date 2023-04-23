import {
  Button,
  Flex,
  FlexProps,
  Heading,
  Stack,
  StackProps,
  Text,
} from '@chakra-ui/react'
import Link from 'next/link'
import React, { PropsWithChildren } from 'react'

interface Props extends FlexProps {}

type DetailBoxProps = PropsWithChildren<StackProps & { title: string }>

const DetailBox: React.FC<DetailBoxProps> = ({ children, title, ...props }) => (
  <Stack {...props} width="300px" height="200px" color="white" p={6} gap={2}>
    <Heading as="h4" fontSize="xl">
      {title}
    </Heading>
    {children}
  </Stack>
)

export default function BusinessDetails({ ...flexProps }: Props) {
  return (
    <Flex justifyContent="center" w="100%" {...flexProps}>
      <Stack
        boxShadow="md"
        borderWidth={1}
        borderStyle="solid"
        borderColor="blackAlpha.200"
        direction={['column', 'column', 'row']}
        spacing={0}
        borderRadius={8}
        overflow="hidden"
      >
        <DetailBox bg="red.200" title="Contact us">
          <Text>Lorem ipsum dolor sit amet.</Text>
        </DetailBox>
        <DetailBox bg="red.500" title="Find us">
          <Text>Lorem ipsum dolor sit amet.</Text>
          <Button
            borderRadius={6}
            width="fit-content"
            href="#"
            as={Link}
            variant="outline"
          >
            View on map
          </Button>
        </DetailBox>
        <DetailBox bg="red.800" title="Opening hours">
          <Text>Lorem ipsum dolor sit amet.</Text>
        </DetailBox>
      </Stack>
    </Flex>
  )
}
