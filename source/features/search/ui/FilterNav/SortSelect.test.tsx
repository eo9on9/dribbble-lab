import { render } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { SortSelect } from './SortSelect'

describe('[Features] <FilterNav> - <SortSelect>', () => {
  test('정렬 옵션들을 표시한다.', async () => {
    const user = userEvent.setup()

    const { getByRole } = render(<SortSelect />)

    await user.click(getByRole('combobox'))

    getByRole('option', { name: 'Popular' })
    getByRole('option', { name: 'New & Noteworthy' })
  })

  test('정렬 옵션의 기본 값은 "Popular"이다.', () => {
    const { getByRole } = render(<SortSelect />)

    expect(getByRole('combobox')).toHaveTextContent('Popular')
  })
})
