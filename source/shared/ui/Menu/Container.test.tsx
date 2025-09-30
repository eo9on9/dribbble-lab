import type { Mode } from '@/source/shared/ui/Menu/types'
import { render } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { Container } from './Container'

const useModeContext = vi.hoisted(vi.fn)
vi.mock('@/source/shared/ui/Menu/useModeContext', () => ({
  useModeContext,
}))

const show = vi.fn()
const hide = vi.fn()
vi.mock('@/source/shared/ui/Menu/useSubPanelContext', () => ({
  useSubPanelContext: () => ({
    show,
    hide,
  }),
}))

const Tester = () => {
  return (
    <div>
      <Container>
        <button>Trigger</button>
        <button>SubLink1</button>
        <button>SubLink2</button>
      </Container>
      <button>Outside</button>
    </div>
  )
}

const setup = (mode: Mode) => {
  useModeContext.mockReturnValue(mode)

  return render(<Tester />)
}

describe('[Component] Menu.Container', () => {
  test('컴포넌트가 렌더링 된다.', () => {
    const { getByRole } = setup('popup')

    getByRole('button', { name: 'Trigger' })
    getByRole('button', { name: 'SubLink1' })
    getByRole('button', { name: 'SubLink2' })
  })

  test('팝업 모드에서는 컨테이너에 마우스가 들어가면 서브 패널을 표시된다.', async () => {
    const { getByRole } = setup('popup')

    await userEvent.hover(getByRole('button', { name: 'Trigger' }))

    expect(show).toHaveBeenCalled()
  })

  test('팝업 모드에서는 컨테이너에 마우스가 나가면 서브 패널을 숨긴다.', async () => {
    const { getByRole } = setup('popup')

    await userEvent.unhover(getByRole('button', { name: 'Trigger' }))

    expect(hide).toHaveBeenCalled()
  })

  test('팝업 모드에서는 컨테이너에 포커스가 빠져나가면 서브 패널을 숨긴다.', async () => {
    const { getByRole } = setup('popup')

    await userEvent.tab()

    expect(getByRole('button', { name: 'Trigger' })).toHaveFocus()

    await userEvent.tab()

    expect(getByRole('button', { name: 'SubLink1' })).toHaveFocus()

    await userEvent.tab()

    expect(getByRole('button', { name: 'SubLink2' })).toHaveFocus()

    expect(hide).not.toHaveBeenCalled()

    await userEvent.tab()

    expect(getByRole('button', { name: 'Outside' })).toHaveFocus()

    expect(hide).toHaveBeenCalled()
  })
})
