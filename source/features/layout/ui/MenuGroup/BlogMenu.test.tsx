import { BlogMenu } from '@/source/features/layout/ui/MenuGroup/BlogMenu'
import { render } from '@testing-library/react'

const useMenuGroupContext = vi.hoisted(vi.fn)
vi.mock('@/source/features/layout/ui/MenuGroup/useMenuGroupContext', () => ({
  useMenuGroupContext,
}))

describe('[Features] <MenuGroup> - <BlogMenu>', () => {
  test('컴포넌트가 렌더링 된다.', () => {
    useMenuGroupContext.mockReturnValue({
      mode: 'popup',
      isOpen: false,
    })

    const { getByRole } = render(<BlogMenu />)

    getByRole('link', { name: 'Blog' })
  })
})
