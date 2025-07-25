import { render } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { Item } from './Item'
import { type MenuMode } from './types'

const useMenuContext = vi.hoisted(vi.fn)
vi.mock('./Context', () => ({
  useMenuContext,
}))

const setIsExpanded = vi.fn()
const setup = ({ mode }: { mode: MenuMode }) => {
  useMenuContext.mockReturnValue({
    mode,
    isExpanded: false,
    setIsExpanded,
  })

  return {
    user: userEvent.setup(),
    ...render(<Item>Menu Item 1</Item>),
  }
}

describe('[Component] Menu - Item', () => {
  test('Mobile 모드에서 아이템을 클릭하면 확장 상태가 토글된다.', async () => {
    const { user, getByRole } = setup({ mode: 'mobile' })

    await user.click(getByRole('menuitem', { name: 'Menu Item 1' }))

    expect(setIsExpanded).toHaveBeenCalledWith(true)
  })

  test('PC 모드에서 아이템을 클릭하면 확장 상태가 토글되지 않는다.', async () => {
    const { user, getByRole } = setup({ mode: 'pc' })

    await user.click(getByRole('menuitem', { name: 'Menu Item 1' }))

    expect(setIsExpanded).not.toHaveBeenCalled()
  })
})
