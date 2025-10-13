import { render } from '@testing-library/react'
import { Profile } from './Profile'

vi.mock('@/source/shared/ui/VideoSlides/useVideoSlidesContext', () => ({
  useVideoSlidesContext: () => ({
    item: {
      userImageSrc: 'https://example.com/image.jpg',
      userName: 'John Doe',
    },
  }),
}))

describe('[Shared] <VideoSlides> - <Profile>', () => {
  test('아이템에 들어있는 유저 이미지 주소로 이미지를 표시한다.', () => {
    const { getByRole } = render(<Profile />)

    getByRole('img', { name: 'user image' })
  })

  test('아이템에 들어있는 유저 이름으로 이름을 표시한다.', () => {
    const { getByLabelText } = render(<Profile />)

    expect(getByLabelText('user name')).toHaveTextContent('John Doe')
  })
})
