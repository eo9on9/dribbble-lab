import type { VideoSlidesItem } from '@/source/shared/ui/VideoSlides/types'
import {
  createContext,
  useContext,
  useState,
  type PropsWithChildren,
} from 'react'

interface VideoSlidesContextValue {
  item: VideoSlidesItem
  length: number

  isPlaying: boolean
  setIsPlaying: (isPlaying: boolean) => void

  index: number
  setIndex: (index: number) => void

  isHover: boolean
  setIsHover: (isHover: boolean) => void
}

const VideoSlidesContext = createContext<VideoSlidesContextValue | undefined>(
  undefined,
)

interface VideoSlidesProviderProps extends PropsWithChildren {
  items: VideoSlidesItem[]
}

export const VideoSlidesProvider = ({
  items,
  children,
}: PropsWithChildren<VideoSlidesProviderProps>) => {
  const [index, setIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isHover, setIsHover] = useState(false)

  const item = items[index]
  const length = items.length

  return (
    <VideoSlidesContext.Provider
      value={{
        length,
        item,
        isPlaying,
        setIsPlaying,
        index,
        setIndex,
        isHover,
        setIsHover,
      }}
    >
      {children}
    </VideoSlidesContext.Provider>
  )
}

export const useVideoSlidesContext = () => {
  const context = useContext(VideoSlidesContext)

  if (!context) {
    throw new Error(
      'useVideoSlidesContext must be used within a VideoSlidesProvider',
    )
  }

  return context
}
