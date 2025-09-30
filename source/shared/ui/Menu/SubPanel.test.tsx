import { SubPanel } from '@/source/shared/ui/Menu/SubPanel'
import type { Mode } from '@/source/shared/ui/Menu/types'
import { render } from '@testing-library/react'

const useModeContext = vi.hoisted(vi.fn)
vi.mock('@/source/shared/ui/Menu/useModeContext', () => ({
  useModeContext,
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
  mode = 'popup',
  isCreated = true,
}: {
  mode?: Mode
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
  })

  test('생성 상태가 false이면 컴포넌트가 렌더링되지 않는다.', () => {
    const { queryByRole } = setup({ isCreated: false })

    expect(queryByRole('menu')).not.toBeInTheDocument()
  })
})
