import { useVideoSlidesContext } from '@/source/shared/ui/VideoSlides/useVideoSlidesContext'
import { cva } from 'class-variance-authority'
import { useEffect, useRef } from 'react'

export const Video = () => {
  const { item, isPlaying, length, index, setIndex } = useVideoSlidesContext()
  const ref = useRef<HTMLVideoElement>(null)

  const handleEnded = () => {
    setIndex((index + 1) % length)
  }

  useEffect(() => {
    if (isPlaying) {
      ref.current?.play()
    } else {
      ref.current?.pause()
    }
  }, [isPlaying])

  return (
    <video
      ref={ref}
      src={item.videoSrc}
      autoPlay
      muted
      playsInline
      onEnded={handleEnded}
      aria-label="video"
      className={cn()}
    />
  )
}

const cn = cva([
  /** layout */
  'w-full h-full object-cover',
])
