import { LinkText } from '@/source/shared/ui/LinkText'
import { render } from '@testing-library/react'

const LINK_TEXT = 'Test Link'

describe('[Component] LinkText', () => {
  test('컴포넌트가 렌더링 된다.', () => {
    const { getByRole } = render(<LinkText href="#">{LINK_TEXT}</LinkText>)

    getByRole('link', { name: LINK_TEXT })
  })

  test('주입한 태그로 렌더링 된다.', () => {
    const { getByRole } = render(<LinkText as="button">{LINK_TEXT}</LinkText>)

    getByRole('button', { name: LINK_TEXT })
  })
})
