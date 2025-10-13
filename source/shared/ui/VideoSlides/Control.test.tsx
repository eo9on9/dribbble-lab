import { render } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { Control } from './Control'

const setIsPlaying = vi.fn()
const useVideoSlidesContext = vi.hoisted(vi.fn)
vi.mock('@/source/shared/ui/VideoSlides/useVideoSlidesContext', () => ({
  useVideoSlidesContext,
}))

const setup = ({ isPlaying }: { isPlaying: boolean }) => {
  useVideoSlidesContext.mockReturnValue({
    isPlaying,
    setIsPlaying,
    isHover: true,
  })

  return {
    user: userEvent.setup(),
    ...render(<Control />),
  }
}

describe('[Shared] <VideoSlides> - <Control>', () => {
  test('비디오가 재생중이면 정지 버튼을 표시한다.', () => {
    const { getByRole } = setup({ isPlaying: true })

    getByRole('button', { name: 'Pause' })
  })

  test('재생 버튼을 클릭하면 비디오를 정지한다.', async () => {
    const { user, getByRole } = setup({ isPlaying: true })

    await user.click(getByRole('button', { name: 'Pause' }))

    expect(setIsPlaying).toHaveBeenCalledWith(false)
  })

  test('비디오가 정지중이면 재생 버튼을 표시한다.', () => {
    const { getByRole } = setup({ isPlaying: false })

    getByRole('button', { name: 'Play' })
  })

  test('정지 버튼을 클릭하면 비디오를 재생한다.', async () => {
    const { user, getByRole } = setup({ isPlaying: false })

    await user.click(getByRole('button', { name: 'Play' }))

    expect(setIsPlaying).toHaveBeenCalledWith(true)
  })
})
