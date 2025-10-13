import { Container } from '@/source/shared/ui/VideoSlides/Container'
import { Control } from '@/source/shared/ui/VideoSlides/Control'
import { Profile } from '@/source/shared/ui/VideoSlides/Profile'
import type { VideoSlidesItem } from '@/source/shared/ui/VideoSlides/types'
import { VideoSlidesProvider } from '@/source/shared/ui/VideoSlides/useVideoSlidesContext'
import { Video } from '@/source/shared/ui/VideoSlides/Video'

export interface VideoSlidesProps {
  items: VideoSlidesItem[]
}

export const VideoSlides = ({ items }: VideoSlidesProps) => {
  return (
    <VideoSlidesProvider items={items}>
      <Container>
        <Video />
        <Control />
        <Profile />
      </Container>
    </VideoSlidesProvider>
  )
}
