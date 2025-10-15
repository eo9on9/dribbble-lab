import { render } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { FilterTrigger } from './FilterTrigger'

describe('[Features] <FilterNav> - <FilterTrigger>', () => {
  test('버튼을 클릭하면 onClick 함수를 호출한다.', async () => {
    const onClick = vi.fn()

    const user = userEvent.setup()

    const { getByRole } = render(<FilterTrigger onClick={onClick} />)

    await user.click(getByRole('button', { name: 'Filter' }))

    expect(onClick).toHaveBeenCalled()
  })
})
