import { ExploreMenu } from '@/source/features/layout/ui/MenuGroup/ExploreMenu'
import { render } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'

const useMenuGroupContext = vi.hoisted(vi.fn)
vi.mock('@/source/features/layout/ui/MenuGroup/useMenuGroupContext', () => ({
  useMenuGroupContext,
}))

useMenuGroupContext.mockReturnValue({
  mode: 'popup',
  isOpen: false,
})

describe('[Features] <MenuGroup> - <ExploreMenu>', () => {
  test('컴포넌트가 렌더링 된다.', async () => {
    const user = userEvent.setup()

    const { getByRole } = render(<ExploreMenu />)

    await user.hover(getByRole('button', { name: 'Explore' }))

    getByRole('link', { name: 'Popular' })
    getByRole('link', { name: 'New and Noteworthy' })
    getByRole('link', { name: 'Product Design' })
    getByRole('link', { name: 'Web Design' })
    getByRole('link', { name: 'Animation' })
    getByRole('link', { name: 'Branding' })
    getByRole('link', { name: 'Illustration' })
    getByRole('link', { name: 'Mobile' })
    getByRole('link', { name: 'Typography' })
    getByRole('link', { name: 'Print' })
  })
})
