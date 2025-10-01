import { Button } from '@/source/shared/ui/Button'
import { render } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'

const BUTTON_NAME = 'Test Button'

describe('[Component] Button', () => {
  test('컴포넌트가 렌더링 된다.', () => {
    const { getByRole } = render(<Button>{BUTTON_NAME}</Button>)

    getByRole('button', { name: BUTTON_NAME })
  })

  test('주입한 태그로 렌더링 된다.', () => {
    const { getByRole } = render(
      <Button as="a" href="#">
        {BUTTON_NAME}
      </Button>,
    )

    getByRole('link', { name: BUTTON_NAME })
  })

  test('클릭되면 클릭 핸들러가 호출된다.', async () => {
    const onClick = vi.fn()

    const { getByRole } = render(
      <Button onClick={onClick}>{BUTTON_NAME}</Button>,
    )

    await userEvent.click(getByRole('button', { name: BUTTON_NAME }))

    expect(onClick).toHaveBeenCalled()
  })
})
