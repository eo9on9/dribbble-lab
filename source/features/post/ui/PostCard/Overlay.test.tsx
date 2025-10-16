import { fireEvent, render } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { Overlay, type OverlayProps } from './Overlay'

const TITLE_TEXT = 'Test Title'
const mockOnBookmarkClick = vi.fn()
const mockOnLikeClick = vi.fn()

const setup = ({
  title = TITLE_TEXT,
  isLiked = false,
  isBookmarked = false,
  onLikeClick = mockOnLikeClick,
  onBookmarkClick = mockOnBookmarkClick,
}: Partial<OverlayProps> = {}) => ({
  user: userEvent.setup(),
  ...render(
    <Overlay
      title={title}
      isLiked={isLiked}
      isBookmarked={isBookmarked}
      onLikeClick={onLikeClick}
      onBookmarkClick={onBookmarkClick}
    />,
  ),
})

describe('[Features] <PostCard> - <Overlay>', () => {
  test('타이틀이 표시된다.', () => {
    const { getByText } = setup()

    getByText(TITLE_TEXT)
  })
  test('북마크 버튼이 표시된다.', () => {
    const { getByRole } = setup()

    getByRole('button', { name: 'Bookmark' })
  })
  test('북마크 버튼이 눌려있음이 표시된다.', () => {
    const { getByRole } = setup({ isBookmarked: true })

    expect(getByRole('button', { name: 'Bookmark' })).toHaveAttribute(
      'aria-pressed',
      'true',
    )
  })
  test('북마크 버튼을 클릭하면 기본 동작을 방지하고 onBookmarkClick이 호출된다.', () => {
    const { getByRole } = setup()

    const mockEvent = { preventDefault: vi.fn() }

    fireEvent.click(getByRole('button', { name: 'Bookmark' }), mockEvent)

    expect(mockEvent.preventDefault).not.toHaveBeenCalled()

    expect(mockOnBookmarkClick).toHaveBeenCalled()
  })
  test('좋아요 버튼이 표시된다.', () => {
    const { getByRole } = setup()

    getByRole('button', { name: 'Like' })
  })
  test('좋아요 버튼이 눌려있음이 표시된다.', () => {
    const { getByRole } = setup({ isLiked: true })

    expect(getByRole('button', { name: 'Like' })).toHaveAttribute(
      'aria-pressed',
      'true',
    )
  })
  test('좋아요 버튼을 클릭하면 기본 동작을 방지하고 onLikeClick이 호출된다.', () => {
    const { user, getByRole } = setup()

    const mockEvent = { preventDefault: vi.fn() }

    fireEvent.click(getByRole('button', { name: 'Like' }), mockEvent)

    expect(mockEvent.preventDefault).not.toHaveBeenCalled()

    expect(mockOnLikeClick).toHaveBeenCalled()
  })
})
