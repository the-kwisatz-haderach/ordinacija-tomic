import { Button, ButtonGroup } from '@chakra-ui/react'
import { useTranslations } from 'next-intl'
import React, { CSSProperties, Key } from 'react'
import { useSnapCarousel } from 'react-snap-carousel'
import type { CarouselItemProps } from './CarouselItem'

const styles = {
  scroll: {
    position: 'relative',
    display: 'flex',
    overflow: 'auto',
    scrollSnapType: 'x mandatory',
    gap: '1rem',
  },
  controls: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pagination: {
    display: 'flex',
  },
  pageIndicator: {
    display: 'flex',
    justifyContent: 'center',
  },
} satisfies Record<string, CSSProperties>

interface CarouselProps<T> {
  readonly items: T[]
  readonly renderItem: (
    props: CarouselRenderItemProps<T>
  ) => React.ReactElement<CarouselItemProps>
}

interface CarouselRenderItemProps<T> {
  readonly item: T
  readonly isSnapPoint: boolean
}

const Carousel = <T extends { id: Key; src: string }>({
  items,
  renderItem,
}: CarouselProps<T>) => {
  const t = useTranslations('Home')
  const {
    scrollRef,
    pages,
    activePageIndex,
    prev,
    next,
    goTo,
    snapPointIndexes,
  } = useSnapCarousel({
    axis: 'x',
  })

  return (
    <div>
      <ul style={styles.scroll} ref={scrollRef}>
        {items.map((item, i) =>
          renderItem({
            item,
            isSnapPoint: snapPointIndexes.has(i),
          })
        )}
      </ul>
      <div key={pages.length} style={styles.controls} aria-hidden>
        <ButtonGroup key={pages.length} isAttached mt={4}>
          <Button
            key={pages.length}
            size={['xs', 'sm', 'md', 'lg']}
            variant="outline"
            opacity={activePageIndex <= 0 ? 0.5 : 1}
            pointerEvents={activePageIndex <= 0 ? 'none' : 'unset'}
            onClick={prev}
          >
            {t('previous')}
          </Button>
          {pages.map((_, i) => (
            <Button
              size={['xs', 'sm', 'md', 'lg']}
              key={`${pages.length}${i}`}
              variant={activePageIndex === i ? 'solid' : 'outline'}
              onClick={() => goTo(i)}
            >
              {i + 1}
            </Button>
          ))}
          <Button
            key={pages.length}
            size={['xs', 'sm', 'md', 'lg']}
            variant="outline"
            opacity={activePageIndex === pages.length - 1 ? 0.5 : 1}
            pointerEvents={
              activePageIndex === pages.length - 1 ? 'none' : 'unset'
            }
            onClick={next}
          >
            {t('next')}
          </Button>
        </ButtonGroup>
      </div>
    </div>
  )
}

export default Carousel
