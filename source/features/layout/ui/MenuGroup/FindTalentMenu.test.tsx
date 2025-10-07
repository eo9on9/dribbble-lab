import { FindTalentMenu } from '@/source/features/layout/ui/MenuGroup/FindTalentMenu'
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

describe('[Features] <MenuGroup> - <FindTalentMenu>', async () => {
  test('컴포넌트가 렌더링 된다.', async () => {
    const user = userEvent.setup()

    const { getByRole } = render(<FindTalentMenu />)

    await user.hover(getByRole('button', { name: 'Find Talent' }))

    getByRole('link', { name: 'Get Matched Now New' })
    getByRole('link', { name: 'Browse Profiles' })
    getByRole('link', { name: 'Purchase Services' })
    getByRole('link', { name: 'Hire Fractional Talent' })
    getByRole('link', { name: 'Post a Full-Time Job' })
  })
})
