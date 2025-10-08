import type { Device } from '@/source/shared/constants/breakpoints'
import { SignupSection } from '@/source/widgets/layout/ui/Header/SignupSection'
import { render } from '@testing-library/react'

const useHeaderContext = vi.hoisted(vi.fn)
vi.mock('@/source/widgets/layout/ui/Header/useHeaderContext', () => ({
  useHeaderContext,
}))

const setup = (device: Device) => {
  useHeaderContext.mockReturnValue({ device })

  return render(<SignupSection />)
}

describe('[Widgets] <Header> - <SignupSection>', () => {
  test('모바일 해상도에서 컴포넌트가 렌더링 되지 않는다.', () => {
    const { queryByRole } = setup('mobile')

    expect(queryByRole('link', { name: 'Sign up' })).not.toBeInTheDocument()
  })

  test('태블릿 해상도에서 컴포넌트가 렌더링 된다.', () => {
    const { getByRole } = setup('tablet')

    getByRole('link', { name: 'Sign up' })
  })

  test('PC 해상도에서 컴포넌트가 렌더링 된다.', () => {
    const { getByRole } = setup('pc')

    getByRole('link', { name: 'Sign up' })
  })
})
