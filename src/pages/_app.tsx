import 'normalize.css/normalize.css'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { NextIntlProvider } from 'next-intl'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    brand: {
      100: '#f6f6f6',
      800: '#5d5d5d',
      900: '#373737',
    },
    accent: {
      100: '#B31A1A',
      800: '#1a202c',
      900: '#aa171d',
    },
  },
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <NextIntlProvider messages={pageProps.messages}>
        <Component {...pageProps} />
      </NextIntlProvider>
    </ChakraProvider>
  )
}
