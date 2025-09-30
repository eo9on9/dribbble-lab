import type { Device } from '@/source/shared/constants/breakpoints'
import { Trigger } from '@/source/shared/ui/Menu/Trigger'
import { render } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'

const useDeviceContext = vi.hoisted(vi.fn)
vi.mock('@/source/shared/ui/Menu/useDeviceContext', () => ({
  useDeviceContext,
}))

const toggle = vi.fn()
const show = vi.fn()
vi.mock('@/source/shared/ui/Menu/useSubPanelContext', () => ({
  useSubPanelContext: () => ({
    toggle,
    show,
  }),
}))

const BUTTON_NAME = 'Test Menu'

const setup = (device: Device) => {
  useDeviceContext.mockReturnValue(device)

  return render(<Trigger>{BUTTON_NAME}</Trigger>)
}

describe('[Component] Menu.Trigger', () => {
  test('컴포넌트가 렌더링 된다.', () => {
    const { getByRole } = setup('mobile')

    getByRole('button', { name: BUTTON_NAME })
  })

  test('Mobile에서는 트리거가 클릭되면 서브 패널이 토글된다.', async () => {
    const { getByRole } = setup('mobile')

    await userEvent.click(getByRole('button', { name: BUTTON_NAME }))

    expect(toggle).toHaveBeenCalled()
  })

  test('PC에서는 트리거가 클릭되면 서브 패널이 표시되지 않는다.', async () => {
    const { getByRole } = setup('pc')

    await userEvent.click(getByRole('button', { name: BUTTON_NAME }))

    expect(toggle).not.toHaveBeenCalled()
  })

  test('PC에서는 트리거가 포커스되면 서브 패널이 표시된다.', async () => {
    setup('pc')

    await userEvent.tab()

    expect(show).toHaveBeenCalled()
  })
})
