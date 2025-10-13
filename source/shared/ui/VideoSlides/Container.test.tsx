import { Container } from '@/source/shared/ui/VideoSlides/Container'
import { render } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'

const setIsHover = vi.fn()
vi.mock('@/source/shared/ui/VideoSlides/useVideoSlidesContext', () => ({
  useVideoSlidesContext: () => ({ setIsHover }),
}))

const Tester = () => (
  <Container>
    <div>test</div>
  </Container>
)

describe('[Shared] <VideoSlides> - <Container>', () => {
  test('컨테이너 컴포넌트에 마우스를 올리거나 내리면 호버 상태를 변경한다.', async () => {
    const user = userEvent.setup()

    const { getByText } = render(<Tester />)

    await user.hover(getByText('test'))
    expect(setIsHover).toHaveBeenCalledWith(true)

    await user.unhover(getByText('test'))
    expect(setIsHover).toHaveBeenCalledWith(false)
  })
})
