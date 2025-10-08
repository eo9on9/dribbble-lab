import { LoginSection } from '@/source/widgets/layout/ui/Header/LoginSection'
import { render } from '@testing-library/react'

describe('[Widgets] <Header> - <LoginSection>', () => {
  test('컴포넌트가 렌더링 된다.', () => {
    const { getByRole } = render(<LoginSection />)

    getByRole('link', { name: 'Log in' })
  })
})
