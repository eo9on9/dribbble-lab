import { cva } from 'class-variance-authority'
import Image from 'next/image'

interface ThumbnailProps {
  src: string
  alt: string
}

export const Thumbnail = ({ src, alt }: ThumbnailProps) => {
  return (
    <div className={wrapperCn()}>
      <Image className={imageCn()} src={src} alt={alt} fill />
    </div>
  )
}

const wrapperCn = cva([
  /** layout */
  'overflow-hidden relative w-full aspect-4/3',
])

const imageCn = cva([
  /** layout */
  'w-full h-full object-cover',
])
