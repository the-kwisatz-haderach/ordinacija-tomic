import { Box } from '@chakra-ui/layout'
import React from 'react'

type Props = {}

export default function Footer({}: Props) {
  return (
    <Box as="footer" minH={300} backgroundColor="brand.100" color="white">
      Footer
    </Box>
  )
}
