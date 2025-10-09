import { FooterLogo } from '@/source/features/layout/ui/FooterLogo'
import { render } from '@testing-library/react'

describe('[Features] <FooterLogo>', () => {
  test('컴포넌트가 렌더링된다.', () => {
    const { getByRole } = render(<FooterLogo />)

    getByRole('link', { name: 'Go to home' })
  })
})
