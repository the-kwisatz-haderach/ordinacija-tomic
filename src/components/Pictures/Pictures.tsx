import pic1 from '../../images/slike_1.webp'
import pic2 from '../../images/slike_2.webp'
import pic3 from '../../images/slike_3.webp'
import pic4 from '../../images/slike_4.webp'
import pic5 from '../../images/slike_5.webp'
import pic6 from '../../images/waiting_room.webp'
import pic7 from '../../images/reception_large.webp'
import { Box } from '@chakra-ui/react'
import Carousel from '@components/Carousel/Carousel'
import CarouselItem from '@components/Carousel/CarouselItem'

const images = [
  { src: pic7.src, id: 6, alt: 'recepcija' },
  { src: pic6.src, id: 5, alt: 'čekaonica' },
  { src: pic1.src, id: 0, alt: 'ordinacija' },
  { src: pic2.src, id: 1, alt: 'ordinacija' },
  { src: pic3.src, id: 2, alt: 'ordinacija' },
  { src: pic4.src, id: 3, alt: 'ordinacija' },
  { src: pic5.src, id: 4, alt: 'ordinacija' },
]

export const Pictures = () => {
  return (
    <Box mt={-20}>
      <Carousel
        items={images}
        renderItem={({ item, isSnapPoint }) => (
          <CarouselItem
            key={`${item.id}${isSnapPoint}`}
            isSnapPoint={isSnapPoint}
          >
            <img
              src={item.src}
              width={0}
              height={0}
              sizes="100vw"
              style={{
                maxWidth: '100vw',
                width: '100%',
                height: 'auto',
                maxHeight: 500,
              }}
              alt={item.alt}
            />
          </CarouselItem>
        )}
      />
    </Box>
  )
}
