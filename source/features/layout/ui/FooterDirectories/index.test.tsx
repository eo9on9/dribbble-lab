import { FooterDirectories } from '@/source/features/layout/ui/FooterDirectories'
import { render } from '@testing-library/react'

describe('[Features] <FooterDirectories>', () => {
  test('컴포넌트가 렌더링된다.', () => {
    const { getByRole } = render(<FooterDirectories />)

    getByRole('link', { name: 'Jobs' })
    getByRole('link', { name: 'Designers' })
    getByRole('link', { name: 'Freelancers' })
    getByRole('link', { name: 'Tags' })
    getByRole('link', { name: 'Places' })
    getByRole('link', { name: 'Resources' })
  })
})
