import { Box } from '@chakra-ui/react'

export interface CarouselItemProps {
  readonly isSnapPoint: boolean
  readonly children?: React.ReactNode
}

const styles = {
  itemSnapPoint: {
    scrollSnapAlign: 'start',
  },
}

const CarouselItem = ({ isSnapPoint, children }: CarouselItemProps) => (
  <Box
    key={`${isSnapPoint}`}
    flexShrink={0}
    style={{
      ...(isSnapPoint ? styles.itemSnapPoint : {}),
    }}
  >
    {children}
  </Box>
)

export default CarouselItem
