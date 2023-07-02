import React from 'react'
import { Accordion, Container, Heading, Text } from '@chakra-ui/react'
import Service, { Props as SerivceProps } from '@components/Service/Service'

type Props = {}

const services: SerivceProps[] = [
  {
    title: 'Kardiološki pregled',
    value: '1',
    Content: () => (
      <p>
        Kardiovaskularne bolesti danas spadaju u najčešće bolesti u svijetu,
        čemu pridonosi ubrzani stil života. Brojne životne navike poput pušenja,
        konzumiranje alkohola, manjak tjelesne aktivnosti, povišene masnoće u
        krvi, neregulirana šećerna bolest, te stres i genetske predispozicije
        znatno povećavaju rizik za oboljenje od kardiovaskularnih bolesti. Bol u
        grudima, zamaranje pri hodu i naporu, gubitak zraka, preskakanje srca,
        nemogućnost spavanja na ravnom, vrtoglavice su neki od simptoma koji
        trebaju uputiti na pregled kardiologa.
      </p>
    ),
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
    value: '2',
    Content: () => (
      <>
        <p>
          Uključuje pregled i dijagnostiku bolesti bubrega, mokraćnog sustava,
          te obradu hipertenzije. Veliki broj ljudi živi s nekom bolesti
          bubrega, a da to ni ne zna, dok same simptome pripisuju nekim drugim
          stanjima. Također, dio oboljelih nema gotovo nikakvih simptoma sve do
          kasnog stadija kada bubrezima počinje zatajivati funkcija. Procjenuje
          se da gotovo 700 milijuna ljudi boluje od kronične bubrežne bolesti i
          da ona uzrokuje oko 1,4 miljuna smrti godišnje diljem svijeta.
        </p>
        <p>
          Hipertenzija ili povišeni krvni tlak je tiha bolest koja godinama ne
          mora pokazivati nikakve simptome. Tek kada se manifestiraju oštećenja
          na raznim organima, zamijete se i povećane vrijednosti krvnog tlaka.
          Dijagnoza se postavlja kada je krvni tlak viši od 140/90 mmHg u
          mirovanju, tijekom najmanje dva odvojena mjerenja. Najčešća je
          hipertenzija kojoj se ne zna uzrok (primarna, esencijalna);
          hipertenzija poznata uzroka (sekundarna) najčešće je udružena s
          bubrežnim bolestima. Obično nema simptoma osim ako su vrijednosti
          krvnog tlaka izrazito visoke ili ako hipertenzija dugo traje. Gotovo
          trećina svjetske populacije ima povišeni krvni tlak, dok se 18% smrti
          na svjetskoj razini može pripisati hipertenziji.
        </p>
      </>
    ),
    tags: [
      'UZV mokraćnog sustava',
      'Obrada hipertenzije',
      'Holter krvnog tlaka',
    ],
  },
  {
    title: 'Endokrinološki pregled',
    value: '3',
    Content: () => (
      <p>
        Endokrinologija je znanost koja se bavi žlijezdama sa unutarnjim
        izlučivanjem i hormonima koji one proizvode. Na prvom mjestu
        endokrinoloških bolesti spada šećerna bolest. Šećerna bolest ili
        dijabetes je kronična bolest povišene razine šećera u krvi. Simptomi
        šećerne bolesti bi bili: prekomjerna žeđ, učestalo mokrenje, gubitak na
        tjelesnog težini, umor i iscrpljenost, pojačan apetit, iznenadne smetnje
        vida, kožne promjene, suha usta, češće infekcije i dr. Na drugom mjestu
        najčešćih endokrinoloških bolesti spadaju bolesti štitne žlijezde.
        Hipotireoza je najčešća bolest štitne žlijezde, a neki od simptoma su
        trajni umor, iscrpljenost, suha usta, otekline oko očiju, suha i
        perutava koža, tanka kosa koja opada, slabija koncentracija i
        zaboravljivost, poremećaj menstruacijskog ciklusa, dobivanje na
        tjelesnoj masi. Što ranije uspostavljena dijagnoza i terapija svih
        endokrinoloških bolesti smanjuje mogućnost razvijanja brojnih
        komplikacija.
      </p>
    ),
    tags: ['UZV štitnjače', 'UZV abdomena'],
  },
  {
    title: 'Reumatološki pregled',
    value: '4',
    Content: () => (
      <p>
        Reumatologija je grana interne medicine koja se bavi dijagnosticiranjem
        i liječenjem bolesti zglobova i zglobnih struktura. Reumatske bolesti
        zahvaćaju i unutarnje organe kao što su bubrezi, pluća, koža, probavni
        sustav, mozak i oči. Češće se javljaju u žena. Kao prateći simptomi
        bolesti javljaju se ograničena pokretljivost, oslabljena funkcija te bol
        koja je najčešći razlog javljanja liječniku.
      </p>
    ),
  },
  {
    title: 'Imunološki pregled',
    value: '5',
    Content: () => (
      <>
        <p>
          Imunologija je grana medicine koja proučava cjelokupnu otpornost
          organizma na djelovanje stranih uticaja, tj. antigena. U praktičnom
          smislu, imunologija proučava sve oblike obrane domaćina od zaraze i
          štetne posledice imunosnog odgovora za domaćina.
        </p>
        <p>
          Imunološki pregled se obavlja kada sumnjamo na bilo kakvu imunološku
          ili autoimunu bolest.
        </p>
        <p style={{ fontWeight: 'bold' }}>Najčešće autoimune bolesti</p>
        <p>Kao one najčešće koje se pojavljuju:</p>
        <ul>
          <li>Reumatoidni artritis - kronična upalna bolest vezivnog tkiva</li>
          <li>Crohnova bolest - kronična upala crijeva</li>
          <li>
            Celijakija - kronična bolest koju obilježava nepodnošenje glutena
          </li>
          <li>Hashimotova bolest - upala štitne žlijezde</li>
          <li>
            Multipla skleroza - kronična upalna i degenerativna bolest
            središnjeg živčanog sustava, a oštećenja mogu zahvatiti mozak i
            kralježničnu moždinu
          </li>
          <li>
            Sistemski lupus eritematodes - bolest kože i unutarnjih organa
          </li>
          <li>
            Skleroderma - uzrokuje zadebljanje kože i unutrašnjih organa što
            može dovesti do zatajenja srca i pluća
          </li>
          <li>Sjögrenov sindrom - suhoća sluznica (oči, usta)</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Hematološki pregled',
    value: '6',
    Content: () => (
      <p>
        Hematologija je grana interne medicine koja se bavi dijagnosticiranjem i
        liječenjem bolesti krvnog sustava. U krvni sustav spadaju: koštana srž,
        timus, jetra, slezena, limfni čvorovi, te krvne stanice: eritrociti,
        leukociti i trombociti. Hematologija je složeno i izazovno medicinsko
        područje koje obuhvaća raznovrsne bolesti, od različitih oblika raka
        krvi do poremećaja krvarenja poput hemofilije. Iako je priroda tih
        bolesti raznolika, zajedničko im je obilježje ozbiljan utjecaj na
        kvalitetu života. Od brojnih dobroćudnih hematoloških bolesti najčešće
        su anemije, a od zloćudnih leukemije i limfomi. Rak krvi peti je
        najčešći uzrok smrti zbog raka u svijetu, a tri su najčešće vrste toga
        raka: limfom, leukemija i mijelom. Najčešći simptomi zbog koje se
        pacijenti javljaju liječniku su: slabost, malaksalost, zujanje u ušima,
        lupanje srca, vrtoglavica,tromboze,modrice po koži i sluznicama, gubitak
        apetita, povišena temperatura, bolovi u kostima, česte infekcije,
        poremećaji vida.
      </p>
    ),
  },
  {
    title: 'Ostale usluge',
    value: '7',
    Content: () => <p>Obrada hipertenzije, Holter krvnog tlaka</p>,
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
      <Accordion allowMultiple>
        {services.map((service, i) => (
          <Service key={i} {...service} />
        ))}
      </Accordion>
    </Container>
  )
}
