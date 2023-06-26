import React, { Fragment } from 'react'
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  Flex,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react'
import Service, { Props as SerivceProps } from '@components/Service/Service'
import Image from 'next/image'
import service1 from '../../images/5.png'
import service2 from '../../images/6.png'
import service3 from '../../images/7.png'
import service4 from '../../images/8.png'
import service5 from '../../images/9.png'
import service6 from '../../images/10.png'

type Props = {}

const services: SerivceProps[] = [
  {
    title: 'Kardiološki pregled',
    description:
      'Kardiovaskularne bolesti danas spadaju u najčešće bolesti u svijetu, čemu pridonosi ubrzani stil života. Brojne životne navike poput pušenja, konzumiranje alkohola, manjak tjelesne aktivnosti, povišene masnoće u krvi, neregulirana šećerna bolest, te stres i genetske predispozicije znatno povećavaju rizik za oboljenje od kardiovaskularnih bolesti. Bol u grudima, zamaranje pri hodu i naporu, gubitak zraka, preskakanje srca, nemogućnost spavanja na ravnom, vrtoglavice su neki od simptoma koji trebaju uputiti na pregled kardiologa.',
    imageSrc: 'https://picsum.photos/200/300',
    tags: [
      'UZV srca',
      'EKG 12-kanalni',
      'Ergometrijsko testiranje',
      'Holter krvnog tlaka',
      'Holter EKG',
    ],
  },
  {
    title: 'Nefrološki pregled',
    description:
      'Uključuje pregled i dijagnostiku bolesti bubrega, mokraćnog sustava, te obradu hipertenzije. Veliki broj ljudi živi s nekom bolesti bubrega, a da to ni ne zna, dok same simptome pripisuju nekim drugim stanjima. Također, dio oboljelih nema gotovo nikakvih simptoma sve do kasnog stadija kada bubrezima počinje zatajivati funkcija. Procjenuje se da gotovo 700 milijuna ljudi boluje od kronične bubrežne bolesti i da ona uzrokuje oko 1,4 miljuna smrti godišnje diljem svijeta. Hipertenzija ili povišeni krvni tlak je tiha bolest koja godinama ne mora pokazivati nikakve simptome. Tek kada se manifestiraju oštećenja na raznim organima, zamijete se i povećane vrijednosti krvnog tlaka. Dijagnoza se postavlja kada je krvni tlak viši od 140/90 mmHg u mirovanju, tijekom najmanje dva odvojena mjerenja. Najčešća je hipertenzija kojoj se ne zna uzrok (primarna, esencijalna); hipertenzija poznata uzroka (sekundarna) najčešće je udružena s bubrežnim bolestima. Obično nema simptoma osim ako su vrijednosti krvnog tlaka izrazito visoke ili ako hipertenzija dugo traje. Gotovo trećina svjetske  populacije ima povišeni krvni tlak, dok se 18% smrti na svjetskoj razini može pripisati hipertenziji.',
    imageSrc: 'https://picsum.photos/200/300',
    tags: [
      'UZV mokraćnog sustava',
      'Obrada hipertenzije',
      'Holter krvnog tlaka',
    ],
  },
  {
    title: 'Endokrinološki pregled',
    description:
      'Endokrinologija je znanost koja se bavi žlijezdama sa unutarnjim izlučivanjem i hormonima koji one proizvode. Na prvom mjestu endokrinoloških bolesti spada šećerna bolest. Šećerna bolest ili dijabetes je kronična bolest povišene razine šećera u krvi. Simptomi šećerne bolesti bi bili: prekomjerna žeđ, učestalo mokrenje, gubitak na tjelesnog težini, umor i iscrpljenost, pojačan apetit, iznenadne smetnje vida, kožne promjene, suha usta, češće infekcije i dr. Na drugom mjestu najčešćih endokrinoloških bolesti spadaju bolesti štitne žlijezde. Hipotireoza je najčešća bolest štitne žlijezde, a neki od simptoma su trajni umor, iscrpljenost, suha usta, otekline oko očiju, suha i perutava koža, tanka kosa koja opada, slabija koncentracija i zaboravljivost, poremećaj menstruacijskog ciklusa, dobivanje na tjelesnoj masi. Što ranije uspostavljena dijagnoza i terapija svih endokrinoloških bolesti smanjuje mogućnost razvijanja brojnih komplikacija.',
    imageSrc: 'https://picsum.photos/200/300',
    tags: ['UZV štitnjače', 'UZV abdomena'],
  },
  {
    title: 'Reumatološki pregled',
    description:
      'Reumatologija je grana interne medicine koja se bavi dijagnosticiranjem i liječenjem bolesti zglobova i zglobnih struktura. Reumatske bolesti zahvaćaju i unutarnje organe kao što su bubrezi, pluća, koža, probavni sustav, mozak i oči. Češće se javljaju u žena.  Kao prateći simptomi bolesti javljaju se ograničena pokretljivost, oslabljena funkcija te bol koja je najčešći razlog javljanja liječniku.',
    imageSrc: 'https://picsum.photos/200/300',
  },
  {
    title: 'Imunološki pregled',
    description:
      'Imunologija je grana medicine koja proučava cjelokupnu otpornost organizma na djelovanje stranih uticaja, tj. antigena. U praktičnom smislu, imunologija proučava sve oblike obrane domaćina od zaraze i štetne posledice imunosnog odgovora za domaćina.',
    imageSrc: 'https://picsum.photos/200/300',
  },
  {
    title: 'Hematološki pregled',
    description:
      'Hematologija je grana interne medicine koja se bavi dijagnosticiranjem i liječenjem bolesti krvnog sustava. U krvni sustav spadaju:  koštana srž, timus, jetra, slezena, limfni čvorovi, te krvne stanice: eritrociti, leukociti i trombociti. Hematologija je složeno i izazovno medicinsko područje koje obuhvaća raznovrsne bolesti, od različitih oblika raka krvi do poremećaja krvarenja poput hemofilije. Iako je priroda tih bolesti raznolika, zajedničko im je obilježje ozbiljan utjecaj na kvalitetu života. Od brojnih dobroćudnih hematoloških bolesti najčešće su anemije, a od zloćudnih leukemije i limfomi. Rak krvi peti je najčešći uzrok smrti zbog raka u svijetu, a tri su najčešće vrste toga raka: limfom, leukemija i mijelom. Najčešći simptomi zbog koje se pacijenti javljaju liječniku su: slabost, malaksalost, zujanje u ušima, lupanje srca, vrtoglavica,tromboze,modrice po koži i sluznicama, gubitak apetita, povišena temperatura, bolovi u kostima, česte infekcije, poremećaji vida.',
    imageSrc: 'https://picsum.photos/200/300',
  },
  {
    title: 'Ostale usluge',
    description: 'Obrada hipertenzije, Holter krvnog tlaka',
    imageSrc: 'https://picsum.photos/200/300',
  },
]

export default function Services({}: Props) {
  return (
    <Container maxW="container.xl">
      <Heading size="2xl" mt={10} mb={8}>
        Usluge
      </Heading>
      <Text fontSize="lg" mb={10}>
        U internističkoj ordinaciji Tomić možete obaviti pregled različitih
        sustava u sklopu interne medicine.
      </Text>
      <Accordion defaultIndex={[0]} allowMultiple>
        {services.map((service, i) => (
          <Service key={i} {...service} />
        ))}
      </Accordion>
      <Flex
        mt={16}
        width="100%"
        gap={10}
        wrap="wrap"
        justifyContent="space-evenly"
      >
        <Box position="relative" overflow="hidden" width="30%" minH={300}>
          <Image
            src={service1}
            alt="service1"
            fill
            style={{
              objectFit: 'cover',
            }}
          />
        </Box>
        <Box position="relative" overflow="hidden" width="30%" minH={300}>
          <Image
            src={service2}
            alt="service2"
            fill
            style={{
              objectFit: 'cover',
            }}
          />
        </Box>
        <Box position="relative" overflow="hidden" width="30%" minH={300}>
          <Image
            src={service3}
            alt="service3"
            fill
            style={{
              objectFit: 'cover',
            }}
          />
        </Box>
        <Box position="relative" overflow="hidden" width="30%" minH={300}>
          <Image
            src={service4}
            alt="service4"
            fill
            style={{
              objectFit: 'cover',
            }}
          />
        </Box>
        <Box position="relative" overflow="hidden" width="30%" minH={300}>
          <Image
            src={service5}
            alt="service5"
            fill
            style={{
              objectFit: 'cover',
            }}
          />
        </Box>
        <Box position="relative" overflow="hidden" width="30%" minH={300}>
          <Image
            src={service6}
            alt="service6"
            fill
            style={{
              objectFit: 'cover',
            }}
          />
        </Box>
      </Flex>
    </Container>
  )
}
