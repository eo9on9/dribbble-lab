import { GetHiredMenu } from '@/source/features/layout/ui/MenuGroup/GetHiredMenu'
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

describe('[Features] <MenuGroup> - <GetHiredMenu>', async () => {
  test('컴포넌트가 렌더링 된다.', async () => {
    const user = userEvent.setup()

    const { getByRole } = render(<GetHiredMenu />)

    await user.hover(getByRole('button', { name: 'Get Hired' }))

    getByRole('link', { name: 'Upgrade to Pro' })
    getByRole('link', { name: 'Advertise' })
    getByRole('link', { name: 'Full-Time Jobs' })
  })
})
