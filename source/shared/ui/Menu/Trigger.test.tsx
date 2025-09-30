import { Trigger } from '@/source/shared/ui/Menu/Trigger'
import type { Mode } from '@/source/shared/ui/Menu/types'
import { render } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'

const useModeContext = vi.hoisted(vi.fn)
vi.mock('@/source/shared/ui/Menu/useModeContext', () => ({
  useModeContext,
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

const setup = (mode: Mode) => {
  useModeContext.mockReturnValue(mode)

  return render(<Trigger>{BUTTON_NAME}</Trigger>)
}

describe('[Component] Menu.Trigger', () => {
  test('컴포넌트가 렌더링 된다.', () => {
    const { getByRole } = setup('popup')

    getByRole('button', { name: BUTTON_NAME })
  })

  test('아코디언 모드에서는 트리거가 클릭되면 서브 패널이 토글된다.', async () => {
    const { getByRole } = setup('accordion')

    await userEvent.click(getByRole('button', { name: BUTTON_NAME }))

    expect(toggle).toHaveBeenCalled()
  })

  test('팝업 모드에서는 트리거가 클릭되면 서브 패널이 표시되지 않는다.', async () => {
    const { getByRole } = setup('popup')

    await userEvent.click(getByRole('button', { name: BUTTON_NAME }))

    expect(toggle).not.toHaveBeenCalled()
  })

  test('팝업 모드에서는 트리거가 포커스되면 서브 패널이 표시된다.', async () => {
    setup('popup')

    await userEvent.tab()

    expect(show).toHaveBeenCalled()
  })
})
