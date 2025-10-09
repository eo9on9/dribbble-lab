import { FooterExternalLinks } from '@/source/features/layout/ui/FooterExternalLinks'
import { render } from '@testing-library/react'

describe('[Features] <FooterExternalLinks>', () => {
  test('컴포넌트가 렌더링된다.', () => {
    const { getByRole } = render(<FooterExternalLinks />)

    getByRole('link', { name: 'Twitter' })
    getByRole('link', { name: 'Facebook' })
    getByRole('link', { name: 'Instagram' })
    getByRole('link', { name: 'Pinterest' })
  })
})
