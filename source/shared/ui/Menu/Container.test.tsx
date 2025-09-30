import type { Device } from '@/source/shared/constants/breakpoints'
import { render } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { Container } from './Container'

const useDeviceContext = vi.hoisted(vi.fn)
vi.mock('@/source/shared/ui/Menu/useDeviceContext', () => ({
  useDeviceContext,
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

const setup = (device: Device) => {
  useDeviceContext.mockReturnValue(device)

  return render(<Tester />)
}

describe('[Component] Menu.Container', () => {
  test('컴포넌트가 렌더링 된다.', () => {
    const { getByRole } = setup('mobile')

    getByRole('button', { name: 'Trigger' })
    getByRole('button', { name: 'SubLink1' })
    getByRole('button', { name: 'SubLink2' })
  })

  test('PC에서는 컨테이너에 마우스가 들어가면 서브 패널을 표시된다.', async () => {
    const { getByRole } = setup('pc')

    await userEvent.hover(getByRole('button', { name: 'Trigger' }))

    expect(show).toHaveBeenCalled()
  })

  test('PC에서는 컨테이너에 마우스가 나가면 서브 패널을 숨긴다.', async () => {
    const { getByRole } = setup('pc')

    await userEvent.unhover(getByRole('button', { name: 'Trigger' }))

    expect(hide).toHaveBeenCalled()
  })

  test('PC에서는 컨테이너에 포커스가 빠져나가면 서브 패널을 숨긴다.', async () => {
    const { getByRole } = setup('pc')

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
