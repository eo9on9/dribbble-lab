import { render } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { SearchButton } from './SearchButton'

describe('[Component] SearchBox - SearchButton', () => {
  test('버튼을 클릭하면 onClick 함수가 호출된다.', async () => {
    const user = userEvent.setup()

    const onClick = vi.fn()

    const { getByRole } = render(<SearchButton onClick={onClick} />)

    await user.click(getByRole('button', { name: 'search' }))

    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
