import { Box, BoxProps } from '@chakra-ui/react'
import React, { PropsWithChildren } from 'react'

interface Props extends BoxProps {}

export default function Section({
  children,
  ...props
}: PropsWithChildren<Props>) {
  return (
    <Box as="section" py={16} {...props}>
      {children}
    </Box>
  )
}
