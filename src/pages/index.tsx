import Head from 'next/head'
import Navigation from '@components/Navigation/Navigation'
import Hero from '@components/Hero/Hero'
import Footer from '@components/Footer/Footer'
import { Box } from '@chakra-ui/layout'
import logo from '@images/tomic_logo.jpeg'
import Contact from '@components/Contact/Contact'
import Services from '@components/Services/Services'
import About from '@components/About/About'

const metaTitle = 'Ordinacija Tomić'
const metaDescription = ''

const sections: Array<{
  label: string
  sectionId: string
  Renderer: React.FC
}> = [
  {
    label: 'Services',
    sectionId: 'services',
    Renderer: Services,
  },
  {
    label: 'About',
    sectionId: 'about',
    Renderer: About,
  },
  {
    label: 'Contact',
    sectionId: 'contact',
    Renderer: Contact,
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
      <Navigation menuItems={sections} logoSrc={logo.src} />
      <Box
        as="main"
        display="flex"
        flexDir="column"
        justifyContent="space-between"
      >
        <Hero />
        {sections.map(({ sectionId, label, Renderer }) => (
          <section aria-label={label} key={sectionId} id={sectionId}>
            <Renderer />
          </section>
        ))}
        <Footer />
      </Box>
    </>
  )
}
