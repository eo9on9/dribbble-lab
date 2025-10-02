import { MenuGroupTrigger } from '@/source/features/layout/ui/MenuGroupTrigger'
import { render } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'

const onClick = vi.fn()

describe('[Features] <MenuGroupTrigger>', () => {
  test('컴포넌트가 렌더링 된다.', () => {
    const { getByRole } = render(
      <MenuGroupTrigger isOpen={false} onClick={onClick} />,
    )

    getByRole('button', { name: 'Toggle menu' })
  })

  test('클릭되면 onClick 함수가 호출된다.', async () => {
    const { getByRole } = render(
      <MenuGroupTrigger isOpen={false} onClick={onClick} />,
    )

    await userEvent.click(getByRole('button', { name: 'Toggle menu' }))

    expect(onClick).toHaveBeenCalled()
  })
})
