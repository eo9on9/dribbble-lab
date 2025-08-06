import { fireEvent, render } from '@testing-library/react'

import { userEvent } from '@testing-library/user-event'
import { Select, type SelectProps } from '.'

const onChange = vi.fn()
const setup = (props: Partial<SelectProps> = {}) => ({
  user: userEvent.setup(),
  ...render(
    <Select
      options={[
        { value: 'apple', label: 'Apple' },
        { value: 'banana', label: 'Banana' },
        { value: 'orange', label: 'Orange' },
      ]}
      onChange={onChange}
      {...props}
    />,
  ),
})

describe('[Component] Select', () => {
  test('컴포넌트가 렌더링된다.', () => {
    setup()
  })

  test('value가 제공되지 않으면 placeholder가 표시된다.', () => {
    const { getByRole } = setup({ placeholder: 'This is placeholder' })

    expect(getByRole('combobox')).toHaveTextContent('This is placeholder')
  })

  test('value가 제공되면 해당 값이 표시된다.', () => {
    const { getByRole } = setup({ value: 'apple' })

    expect(getByRole('combobox')).toHaveTextContent('Apple')
  })

  test('셀렉트를 클릭하면 옵션 목록이 표시된다.', async () => {
    const { getByRole, user } = setup()

    await user.click(getByRole('combobox'))

    getByRole('option', { name: 'Apple' })
    getByRole('option', { name: 'Banana' })
    getByRole('option', { name: 'Orange' })
  })

  test('옵션을 클릭하면 onChange 함수가 호출된다.', async () => {
    const { getByRole, user } = setup()

    await user.click(getByRole('combobox'))

    await user.click(getByRole('option', { name: 'Apple' }))

    expect(onChange).toHaveBeenCalledWith('apple')
  })

  test('셀렉트에서 엔터키를 누르면 옵션 목록이 표시된다.', async () => {
    const { getByRole, user } = setup()

    await user.tab()

    expect(getByRole('combobox')).toHaveFocus()

    await user.keyboard('{Enter}')

    getByRole('option', { name: 'Apple' })
    getByRole('option', { name: 'Banana' })
    getByRole('option', { name: 'Orange' })
  })

  test('옵션을 키보드 상/하 키로 탐색할 수 있고, 엔터 키로 선택할 수 있다.', async () => {
    const { getByRole, user } = setup()

    await user.tab()

    expect(getByRole('combobox')).toHaveFocus()

    await user.keyboard('{Enter}')

    expect(getByRole('option', { name: 'Apple' })).toHaveFocus()

    await user.keyboard('{ArrowDown}')

    expect(getByRole('option', { name: 'Banana' })).toHaveFocus()

    await user.keyboard('{Enter}')

    expect(onChange).toHaveBeenCalledWith('banana')
  })

  test('옵션 목록이 표시되는 동안 외부를 클릭하면 옵션 목록이 닫힌다.', async () => {
    const { getByRole, queryByRole, user } = setup()

    await user.click(getByRole('combobox'))

    expect(getByRole('option', { name: 'Apple' })).toBeInTheDocument()

    fireEvent.pointerDown(document.body)

    expect(queryByRole('option', { name: 'Apple' })).not.toBeInTheDocument()
  })
})
