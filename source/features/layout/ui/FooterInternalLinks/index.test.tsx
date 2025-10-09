import { FooterInternalLinks } from '@/source/features/layout/ui/FooterInternalLinks'
import { render } from '@testing-library/react'

describe('[Features] <FooterInternalLinks>', () => {
  test('컴포넌트가 렌더링된다.', () => {
    const { getByRole } = render(<FooterInternalLinks />)

    getByRole('link', { name: 'For designers' })
    getByRole('link', { name: 'Hire talent' })
    getByRole('link', { name: 'Inspiration' })
    getByRole('link', { name: 'Advertising' })
    getByRole('link', { name: 'Blog' })
    getByRole('link', { name: 'About' })
    getByRole('link', { name: 'Careers' })
    getByRole('link', { name: 'Support' })
  })
})
