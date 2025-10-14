import { render, waitFor } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { Button } from './Button'

const onClick = vi.fn()
const setup = ({ active = false }: { active?: boolean } = {}) => {
  return {
    user: userEvent.setup(),
    ...render(
      <Button active={active} onClick={onClick}>
        Test
      </Button>,
    ),
  }
}

describe('[Shared] <ToggleGroup> - <Button>', () => {
  test('버튼을 클릭하면 onClick 함수가 호출된다.', async () => {
    const { user, getByRole } = setup()

    await user.click(getByRole('button', { name: 'Test' }))

    expect(onClick).toHaveBeenCalled()
  })

  test('최초 렌더링 시 버튼이 활성화되어 있으면 버튼 위치로 스크롤된다.', async () => {
    Object.defineProperty(HTMLButtonElement.prototype, 'scrollIntoView', {
      configurable: true,
      value: vi.fn(),
    })

    const { getByRole } = setup({ active: true })

    const button = getByRole('button', { name: 'Test' })

    await waitFor(() => {
      expect(button.scrollIntoView).toHaveBeenCalled()
    })
  })
})
