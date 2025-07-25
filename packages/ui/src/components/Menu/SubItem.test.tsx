import { render } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { SubItem } from './SubItem'

describe('[Component] Menu - SubItem', () => {
  test('메뉴 아이템을 클릭하면 onClick 함수가 호출된다.', async () => {
    const user = userEvent.setup()

    const onClick = vi.fn()

    const { getByRole } = render(
      <SubItem onClick={onClick}>Sub Item 1</SubItem>,
    )

    await user.click(getByRole('menuitem', { name: 'Sub Item 1' }))

    expect(onClick).toHaveBeenCalled()
  })
})
