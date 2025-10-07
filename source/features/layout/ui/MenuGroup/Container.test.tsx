import { Container } from '@/source/features/layout/ui/MenuGroup/Container'
import type { Mode } from '@/source/shared/ui/Menu/types'
import { render } from '@testing-library/react'

const useMenuGroupContext = vi.hoisted(vi.fn)
vi.mock('@/source/features/layout/ui/MenuGroup/useMenuGroupContext', () => ({
  useMenuGroupContext,
}))

const Tester = () => {
  return (
    <Container>
      <button>Test menu</button>
    </Container>
  )
}

const setup = (mode: Mode, isOpen: boolean) => {
  useMenuGroupContext.mockReturnValue({ mode, isOpen })

  return render(<Tester />)
}

describe('[Features] <MenuGroup> - <Container>', () => {
  test('팝업 모드일 때 컴포넌트가 렌더링 된다.', () => {
    const { getByRole } = setup('popup', false)

    getByRole('button', { name: 'Test menu' })
  })

  test('아코디언 모드이면서 닫힘 상태이면 컴포넌트가 렌더링 되지 않는다.', () => {
    const { queryByRole } = setup('accordion', false)

    expect(queryByRole('button', { name: 'Test menu' })).not.toBeInTheDocument()
  })

  test('아코디언 모드이면서 열림 상태이면 컴포넌트가 렌더링 된다.', () => {
    const { getByRole } = setup('accordion', true)

    getByRole('button', { name: 'Test menu' })
  })
})
