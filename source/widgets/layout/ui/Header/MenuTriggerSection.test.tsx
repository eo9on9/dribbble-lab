import type { Device } from '@/source/shared/constants/breakpoints'
import { MenuTriggerSection } from '@/source/widgets/layout/ui/Header/MenuTriggerSection'
import { render } from '@testing-library/react'

const useHeaderContext = vi.hoisted(vi.fn)
vi.mock('@/source/widgets/layout/ui/Header/useHeaderContext', () => ({
  useHeaderContext,
}))

const setup = (device: Device) => {
  useHeaderContext.mockReturnValue({
    device,
    isMenuOpen: false,
    setIsMenuOpen: vi.fn(),
  })

  return render(<MenuTriggerSection />)
}

describe('[Widgets] <Header> - <MenuTriggerSection>', () => {
  test('PC 해상도에서 컴포넌트가 렌더링 되지 않는다', () => {
    const { queryByRole } = setup('pc')

    expect(
      queryByRole('button', { name: 'Toggle menu' }),
    ).not.toBeInTheDocument()
  })

  test('태블릿 해상도에서 컴포넌트가 렌더링 된다.', () => {
    const { getByRole } = setup('tablet')

    getByRole('button', { name: 'Toggle menu' })
  })

  test('모바일 해상도에서 컴포넌트가 렌더링 된다.', () => {
    const { getByRole } = setup('mobile')

    getByRole('button', { name: 'Toggle menu' })
  })
})
