import { Item } from '@/source/shared/ui/MarqueeGallary/Item'
import type { MarqueeGallaryItem } from '@/source/shared/ui/MarqueeGallary/types'
import { cva } from 'class-variance-authority'
import { useMemo } from 'react'

export interface MarqueeGallaryProps {
  items: MarqueeGallaryItem[]
}

export const MarqueeGallary = ({ items }: MarqueeGallaryProps) => {
  const _items = useMemo(() => [...items, ...items], [items])

  return (
    <div className={containerCn()}>
      <ul className={listCn()}>
        {_items.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </ul>
    </div>
  )
}

const containerCn = cva([
  /** layout */
  'w-[fit-content]',
  /** animation */
  'animate-marquee hover:[animation-play-state:paused]',
])

const listCn = cva([
  /** layout */
  'whitespace-nowrap w-[fit-content]',
  /** transition */
  'hover:-translate-x-4 transition-translate duration-600 ease-out',
])
