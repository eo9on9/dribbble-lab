import { render } from '@testing-library/react'
import { Shortcuts } from './Shortcuts'

describe('[Features] <FilterNav> - <Shortcuts>', () => {
  test('바로 가기 옵션들을 표시한다.', () => {
    const { getByRole } = render(<Shortcuts />)

    getByRole('button', { name: 'Discover' })
    getByRole('button', { name: 'Animation' })
    getByRole('button', { name: 'Branding' })
    getByRole('button', { name: 'Illustration' })
    getByRole('button', { name: 'Mobile' })
    getByRole('button', { name: 'Print' })
    getByRole('button', { name: 'Product Design' })
    getByRole('button', { name: 'Typography' })
    getByRole('button', { name: 'Web Design' })
  })

  test('바로 가기의 기본 값은 "Discover"이다.', () => {
    const { getByRole } = render(<Shortcuts />)

    expect(getByRole('button', { name: 'Discover' })).toHaveAttribute(
      'aria-pressed',
      'true',
    )
  })
})
