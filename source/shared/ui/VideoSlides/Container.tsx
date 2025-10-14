import { useVideoSlidesContext } from '@/source/shared/ui/VideoSlides/useVideoSlidesContext'
import { cva } from 'class-variance-authority'
import type { PropsWithChildren } from 'react'

export const Container = ({ children }: PropsWithChildren) => {
  const { setIsHover } = useVideoSlidesContext()

  return (
    <div
      className={cn()}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {children}
    </div>
  )
}

const cn = cva(['overflow-hidden relative w-full h-[430px] rounded-3xl'])
