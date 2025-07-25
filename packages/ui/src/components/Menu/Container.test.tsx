import { render } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { Container } from './Container'
import { type MenuMode } from './types'

const useMenuContext = vi.hoisted(vi.fn)
vi.mock('./Context', () => ({
  useMenuContext,
}))

const setIsExpanded = vi.fn()
const setup = (mode: MenuMode = 'pc') => {
  useMenuContext.mockReturnValue({
    mode,
    isExpanded: false,
    setIsExpanded,
  })

  return {
    user: userEvent.setup(),
    ...render(
      <Container>
        <button>Menu Item 1</button>
        <button>Menu Item 2</button>
      </Container>,
    ),
  }
}

describe('[Component] Menu - Container', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  test('PC 모드에서 마우스 진입 시 메뉴가 확장된다.', async () => {
    const { user, getByRole } = setup('pc')

    const item = getByRole('button', { name: 'Menu Item 1' })

    await user.hover(item)

    expect(setIsExpanded).toHaveBeenCalledWith(true)
  })

  test('PC 모드에서 마우스 이탈 시 메뉴가 축소된다.', async () => {
    const { user, getByRole } = setup('pc')

    const item = getByRole('button', { name: 'Menu Item 1' })

    await user.hover(item)

    await user.unhover(item)

    expect(setIsExpanded).toHaveBeenCalledWith(false)
  })

  test('Mobile 모드에서는 마우스 이벤트가 동작하지 않는다.', async () => {
    const { user, getByRole } = setup('mobile')

    const item = getByRole('button', { name: 'Menu Item 1' })

    await user.hover(item)

    await user.unhover(item)

    expect(setIsExpanded).not.toHaveBeenCalled()
  })
})
