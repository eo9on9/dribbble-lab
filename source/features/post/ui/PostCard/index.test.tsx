import { render } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { PostCard, type PostCardProps } from '.'

const setup = (_props: Partial<PostCardProps> = {}) => {
  const originalProps: PostCardProps = {
    title: 'Test Title',
    href: '#',
    imgSrc: 'https://www.test.com/image.png',
    likeCount: 10,
    viewCount: 20,
    isLiked: false,
    onLikeClick: vi.fn(),
    isBookmarked: false,
    onBookmarkClick: vi.fn(),
    userName: 'Test User',
    userImgSrc: 'https://www.test.com/image.png',
    userType: 'team',
  }

  const props: PostCardProps = { ...originalProps, ..._props }

  return {
    user: userEvent.setup(),
    ...render(<PostCard {...props} />),
  }
}

describe('[Features] <PostCard>', () => {
  test('주입된 주소를 갖는 링크가 표시된다.', () => {
    const { getByRole } = setup({ href: 'https://www.test.com' })

    expect(getByRole('link')).toHaveAttribute('href', 'https://www.test.com')
  })

  test('북마크 버튼 클릭 시 링크가 클릭되지 않는다.', async () => {
    const { user, getByRole } = setup()

    const link = getByRole('link')

    const handleLinkClick = vi.fn()

    link.addEventListener('click', handleLinkClick)

    const bookmark = getByRole('button', { name: 'Bookmark' })

    await user.click(bookmark)

    expect(handleLinkClick).not.toHaveBeenCalled()
  })

  test('좋아요 버튼 클릭 시 링크가 클릭되지 않는다.', async () => {
    const { user, getByRole } = setup()

    const link = getByRole('link')

    const handleLinkClick = vi.fn()

    link.addEventListener('click', handleLinkClick)

    const like = getByRole('button', { name: 'Like' })

    await user.click(like)

    expect(handleLinkClick).not.toHaveBeenCalled()
  })
})
