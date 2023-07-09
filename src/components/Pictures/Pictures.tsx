import { Carousel, CarouselItem } from '@components/Carousel/Carousel'
import pic1 from '../../images/5.png'
import pic2 from '../../images/6.png'
import pic3 from '../../images/7.png'
import pic4 from '../../images/8.png'
import pic5 from '../../images/9.png'
import pic6 from '../../images/10.png'
import Image from 'next/image'

const images = [
  { src: pic1, id: 0 },
  { src: pic2, id: 1 },
  { src: pic3, id: 2 },
  { src: pic4, id: 3 },
  { src: pic5, id: 4 },
  { src: pic6, id: 5 },
]

export const Pictures = () => {
  return (
    <Carousel
      items={images}
      renderItem={({ item, isSnapPoint }) => (
        <CarouselItem key={item.id} isSnapPoint={isSnapPoint}>
          <Image
            src={item.src.src}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto', maxHeight: 500 }}
            alt=""
          />
        </CarouselItem>
      )}
    />
  )
}
