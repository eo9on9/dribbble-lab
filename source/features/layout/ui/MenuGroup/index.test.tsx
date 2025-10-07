import { MenuGroup } from '@/source/features/layout/ui/MenuGroup'
import { render } from '@testing-library/react'

const MenuGroupContextProvider = vi.hoisted(vi.fn)
const useMenuGroupContext = vi.hoisted(vi.fn)
vi.mock('@/source/features/layout/ui/MenuGroup/useMenuGroupContext', () => ({
  MenuGroupContextProvider,
  useMenuGroupContext,
}))

describe('[Features] <MenuGroup>', () => {
  test('디바이스가 pc일 때 모드는 popup이다.', () => {
    render(<MenuGroup device="pc" isOpen={false} />)

    const [[firstCallProps]] = MenuGroupContextProvider.mock.calls

    expect(firstCallProps.mode).toBe('popup')
  })

  test('디바이스가 mobile일 때 모드는 accordion이다.', () => {
    render(<MenuGroup device="mobile" isOpen={false} />)

    const [[firstCallProps]] = MenuGroupContextProvider.mock.calls

    expect(firstCallProps.mode).toBe('accordion')
  })

  test('디바이스가 tablet일 때 모드는 accordion이다.', () => {
    render(<MenuGroup device="mobile" isOpen={false} />)

    const [[firstCallProps]] = MenuGroupContextProvider.mock.calls

    expect(firstCallProps.mode).toBe('accordion')
  })
})
