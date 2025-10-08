import type { Device } from '@/source/shared/constants/breakpoints'
import { SearchTriggerSection } from '@/source/widgets/layout/ui/Header/SearchTriggerSection'
import { render } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'

const useHeaderContext = vi.hoisted(vi.fn)
vi.mock('@/source/widgets/layout/ui/Header/useHeaderContext', () => ({
  useHeaderContext,
}))

const setIsSearchOpen = vi.fn()
const setup = ({
  device = 'mobile',
  isFixed = false,
  isSearchOpen = false,
}: {
  device?: Device
  isFixed?: boolean
  isSearchOpen?: boolean
} = {}) => {
  useHeaderContext.mockReturnValue({
    device,
    isFixed,
    isSearchOpen,
    setIsSearchOpen,
  })

  return render(<SearchTriggerSection />)
}

describe('[Widgets] <Header> - <SearchTriggerSection>', () => {
  test('모바일 해상도에서 헤더가 Fixed 상태가 아닐 때에는 컴포넌트가 렌더링 되지 않는다.', () => {
    const { queryByRole } = setup({
      device: 'mobile',
      isFixed: false,
      isSearchOpen: true,
    })

    expect(
      queryByRole('button', { name: 'Toggle searchbox' }),
    ).not.toBeInTheDocument()
  })

  test('모바일 해상도에서 헤더가 Fixed 상태이면서 검색 박스가 열림 상태일 때에는 컴포넌트가 렌더링 된다.', () => {
    const { getByRole } = setup({
      device: 'mobile',
      isFixed: true,
      isSearchOpen: true,
    })

    getByRole('button', { name: 'Toggle searchbox' })
  })

  test('태블릿 해상도에서 컴포넌트가 렌더링 되지 않는다.', () => {
    const { queryByRole } = setup({
      device: 'tablet',
      isFixed: true,
      isSearchOpen: true,
    })

    expect(
      queryByRole('button', { name: 'Toggle searchbox' }),
    ).not.toBeInTheDocument()
  })

  test('PC 해상도에서 컴포넌트가 렌더링 되지 않는다.', () => {
    const { queryByRole } = setup({
      device: 'pc',
      isFixed: true,
      isSearchOpen: true,
    })

    expect(
      queryByRole('button', { name: 'Toggle searchbox' }),
    ).not.toBeInTheDocument()
  })

  test('클릭되면 setIsSearchOpen 함수가 호출된다.', async () => {
    const user = userEvent.setup()

    const { getByRole } = setup({
      device: 'mobile',
      isFixed: true,
      isSearchOpen: false,
    })

    await user.click(getByRole('button', { name: 'Toggle searchbox' }))

    expect(setIsSearchOpen).toHaveBeenCalledWith(true)
  })
})
