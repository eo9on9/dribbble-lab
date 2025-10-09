import { FooterTerms } from '@/source/features/layout/ui/FooterTerms'
import { render } from '@testing-library/react'

describe('[Features] <FooterTerms>', () => {
  test('컴포넌트가 렌더링된다.', () => {
    const { getByText, getByRole } = render(<FooterTerms />)

    getByText('© 2025 Dribbble')
    getByRole('link', { name: 'Terms' })
    getByRole('link', { name: 'Privacy' })
    getByRole('link', { name: 'Cookies' })
  })
})
