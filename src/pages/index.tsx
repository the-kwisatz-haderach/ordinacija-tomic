import Head from 'next/head'
import Navigation from '@components/Navigation/Navigation'
import Hero from '@components/Hero/Hero'
import Footer from '@components/Footer/Footer'
import { Box } from '@chakra-ui/layout'

const metaTitle = 'Ordinacija Tomić'
const metaDescription = ''

const menuItems = [
  {
    label: 'Contact',
    section: 'contact',
  },
]

export default function Home() {
  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation menuItems={menuItems} logoSrc="" />
      <Box
        as="main"
        display="flex"
        flexDir="column"
        justifyContent="space-between"
      >
        <Hero />
        <Footer />
      </Box>
    </>
  )
}
