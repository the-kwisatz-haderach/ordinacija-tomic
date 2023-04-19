import { Container as ChakraContainer, ContainerProps } from '@chakra-ui/layout'
import React, { PropsWithChildren } from 'react'

export default function Container({
  children,
  ...props
}: PropsWithChildren<ContainerProps>) {
  return (
    <ChakraContainer {...props} maxW="container.xl">
      {children}
    </ChakraContainer>
  )
}
