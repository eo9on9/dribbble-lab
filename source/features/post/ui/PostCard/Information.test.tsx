import { render } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { Information, type InformationProps } from './Information'

const USER_NAME = 'Test User'
const USER_IMG_SRC = 'https://www.test.com/image.png'

const setup = (_props: Partial<InformationProps> = {}) => {
  const originalProps: InformationProps = {
    userName: USER_NAME,
    userImgSrc: USER_IMG_SRC,
    userType: 'team',
    isLiked: false,
    likeCount: 10,
    viewCount: 20,
  }

  const props: InformationProps = { ...originalProps, ..._props }

  const rendered = render(<Information {...props} />)

  const rerender = (_props: Partial<InformationProps> = {}) => {
    const props: InformationProps = { ...originalProps, ..._props }

    return rendered.rerender(<Information {...props} />)
  }

  return {
    user: userEvent.setup(),
    ...rendered,
    rerender,
  }
}

describe('[Features] <PostCard> - <Information>', () => {
  test('유저 프로필 이미지가 표시된다.', () => {
    const { getByRole } = setup()

    expect(getByRole('img', { name: 'user profile image' })).toHaveAttribute(
      'src',
      USER_IMG_SRC,
    )
  })
  test('유저 이름이 표시된다.', () => {
    const { getByLabelText } = setup()

    expect(getByLabelText('user name')).toHaveTextContent(USER_NAME)
  })
  test('유저 타입이 표시된다.', () => {
    const { getByLabelText } = setup()

    getByLabelText('user type')
  })
  test('유저 타입이 대문자로 표시된다.', () => {
    const { rerender, getByLabelText } = setup({ userType: 'team' })

    expect(getByLabelText('user type')).toHaveTextContent('TEAM')

    rerender({ userType: 'pro' })

    expect(getByLabelText('user type')).toHaveTextContent('PRO')
  })
  test('좋아요 수가 표시된다.', () => {
    const { getByLabelText } = setup()

    getByLabelText('like count')
  })
  test('좋아요 수가 컴팩트 넘버링되어 표시된다.', () => {
    const { rerender, getByLabelText } = setup()

    expect(getByLabelText('like count')).toHaveTextContent('10')

    rerender({ likeCount: 1234 })

    expect(getByLabelText('like count')).toHaveTextContent('1.2k')

    rerender({ likeCount: 1234567 })

    expect(getByLabelText('like count')).toHaveTextContent('1.2m')
  })
  test('조회 수가 표시된다.', () => {
    const { getByLabelText } = setup()

    getByLabelText('view count')
  })
  test('조회 수가 컴팩트 넘버링되어 표시된다.', () => {
    const { rerender, getByLabelText } = setup()

    expect(getByLabelText('view count')).toHaveTextContent('20')

    rerender({ viewCount: 1234 })

    expect(getByLabelText('view count')).toHaveTextContent('1.2k')

    rerender({ viewCount: 1234567 })

    expect(getByLabelText('view count')).toHaveTextContent('1.2m')
  })
})
