import type { MarqueeGallaryItem } from '@/source/shared/ui/MarqueeGallary/types'
import { cva } from 'class-variance-authority'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

interface ItemProps extends MarqueeGallaryItem {}

export const Item = ({ title, imageSrc, href }: ItemProps) => {
  const [isHovered, setIsHovered] = useState(false)

  const handleHover = () => setIsHovered(true)

  const handleLeave = () => setIsHovered(false)

  return (
    <div
      className={wrapperCn()}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <div className={imageWrapperCn()}>
        <div className={imageCn()}>
          <Link href={href}>
            <Image
              src={imageSrc}
              alt={title}
              width={200}
              height={150}
              priority
            />
          </Link>
        </div>
        <div className={imageShadow1Cn({ isHovered })} />
        <div className={imageShadow2Cn({ isHovered })} />
      </div>
      <div className={titleCn()}>{title}</div>
    </div>
  )
}

const wrapperCn = cva([
  /** layout */
  'inline-block mx-4 align-top',
])

const imageWrapperCn = cva([
  /** layout */
  'relative w-[200px] h-[150px]',
])

const imageCn = cva([
  /** layout */
  'z-3 relative overflow-hidden w-full h-full border-2 border-white rounded-lg',
])

const imageShadowCn = cva([
  /** layout */
  'absolute w-full h-full rounded-lg border-2 border-white origin-bottom-left',
  /** transition */
  'transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]',
])

const imageShadow1Cn = cva(
  [
    imageShadowCn(),
    /** layout */
    'z-2 bottom-[5px] left-[5px] bg-drb-gray-500',
  ],
  {
    variants: {
      isHovered: {
        true: 'bottom-[6px] left-[6px]',
      },
    },
  },
)

const imageShadow2Cn = cva(
  [
    imageShadowCn(),
    /** layout */
    'z-1 bottom-[10px] left-[10px] bg-drb-gray-300',
  ],
  {
    variants: {
      isHovered: {
        true: 'bottom-[12px] left-[12px]',
      },
    },
  },
)

const titleCn = cva([
  /** layout */
  'mt-3',
  /** text */
  'text-sm font-semibold text-drb-black',
])
