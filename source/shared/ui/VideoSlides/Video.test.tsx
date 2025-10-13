import { fireEvent, render, waitFor } from '@testing-library/react'
import { Video } from './Video'

const ITEMS = [
  {
    videoSrc: 'https://example.com/video1.mp4',
    userImageSrc: 'https://example.com/image1.jpg',
    userName: 'user1',
  },
  {
    videoSrc: 'https://example.com/video2.mp4',
    userImageSrc: 'https://example.com/image2.jpg',
    userName: 'user2',
  },
]

const useVideoSlidesContext = vi.hoisted(vi.fn)
vi.mock('@/source/shared/ui/VideoSlides/useVideoSlidesContext', () => ({
  useVideoSlidesContext,
}))

const setIndex = vi.fn()
const setIsPlaying = vi.fn()
const setup = ({
  isPlaying = true,
  index = 0,
}: { isPlaying?: boolean; index?: number } = {}) => {
  useVideoSlidesContext.mockReturnValue({
    isPlaying,
    index,
    item: ITEMS[0],
    length: ITEMS.length,
    setIndex,
    setIsPlaying,
  })

  return {
    ...render(<Video />),
  }
}

beforeAll(() => {
  Object.defineProperty(HTMLMediaElement.prototype, 'play', {
    configurable: true,
    value: vi.fn(),
  })
  Object.defineProperty(HTMLMediaElement.prototype, 'pause', {
    configurable: true,
    value: vi.fn(),
  })
})

describe('[Shared] <VideoSlides> - <Video>', () => {
  test('비디오가 재생 상태이면 비디오를 재생한다.', async () => {
    const { getByLabelText } = setup({ isPlaying: true })
    const video = getByLabelText('video') as HTMLMediaElement

    await waitFor(() => {
      expect(video.play).toHaveBeenCalled()
    })
  })

  test('비디오가 정지 상태이면 비디오를 정지한다.', async () => {
    const { getByLabelText } = setup({ isPlaying: false })
    const video = getByLabelText('video') as HTMLMediaElement

    await waitFor(() => {
      expect(video.pause).toHaveBeenCalled()
    })
  })

  test('비디오가 끝나면 다음 비디오로 이동한다.', () => {
    const { getByLabelText } = setup({ index: 0 })
    const video = getByLabelText('video') as HTMLMediaElement

    fireEvent(video, new Event('ended'))
    expect(setIndex).toHaveBeenCalledWith(1)
  })

  test('다음 비디오가 없으면 첫 비디오로 이동한다.', () => {
    const { getByLabelText } = setup({ index: 1 })
    const video = getByLabelText('video') as HTMLMediaElement

    fireEvent(video, new Event('ended'))
    expect(setIndex).toHaveBeenCalledWith(0)
  })
})
