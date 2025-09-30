import {
  DEFAULT_DEVICE,
  type Device,
} from '@/source/shared/constants/breakpoints'
import { SubPanel } from '@/source/shared/ui/Menu/SubPanel'
import { render, screen } from '@testing-library/react'

const useDeviceContext = vi.hoisted(vi.fn)
vi.mock('@/source/shared/ui/Menu/useDeviceContext', () => ({
  useDeviceContext,
}))

const useSubPanelContext = vi.hoisted(vi.fn)
vi.mock('@/source/shared/ui/Menu/useSubPanelContext', () => ({
  useSubPanelContext,
}))

const Tester = () => {
  return (
    <SubPanel>
      <button>SubLink1</button>
      <button>SubLink2</button>
    </SubPanel>
  )
}

const setup = ({
  device = DEFAULT_DEVICE,
  isCreated = true,
}: {
  device?: Device
  isCreated?: boolean
} = {}) => {
  useSubPanelContext.mockReturnValue({ isCreated })

  return render(<Tester />)
}

describe('[Component] Menu.SubPanel', () => {
  test('컴포넌트가 렌더링 된다.', () => {
    const { getByRole } = setup()

    getByRole('menu')
    getByRole('button', { name: 'SubLink1' })
    getByRole('button', { name: 'SubLink2' })

    screen.debug()
  })

  test('isCreated가 false이면 컴포넌트가 렌더링되지 않는다.', () => {
    const { queryByRole } = setup({ isCreated: false })

    expect(queryByRole('menu')).not.toBeInTheDocument()
  })
})
