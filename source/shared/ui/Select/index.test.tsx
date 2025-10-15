import { render } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { Select, type SelectOption, type SelectProps } from './'

const OPTIONS: SelectOption[] = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Cherry', value: 'cherry' },
]

const setup = (props: Partial<SelectProps> = {}) => ({
  user: userEvent.setup(),
  ...render(<Select options={OPTIONS} {...props} />),
})

describe('[Shared] <Select>', () => {
  test('콤보박스를 표시한다.', () => {
    const { getByRole } = setup()

    getByRole('combobox')
  })

  test('초기 선택값이 없으면 플레이스홀더를 표시한다.', () => {
    const { getByRole } = setup({ placeholder: 'Select fruit' })

    expect(getByRole('combobox')).toHaveTextContent('Select fruit')
  })

  test('콤보박스를 클릭하면 옵션이 표시된다.', async () => {
    const { user, getByRole } = setup()

    await user.click(getByRole('combobox'))

    getByRole('option', { name: 'Apple' })
    getByRole('option', { name: 'Banana' })
    getByRole('option', { name: 'Cherry' })
  })

  test('옵션을 선택하면 onChange가 호출된다.', async () => {
    const onChange = vi.fn()

    const { user, getByRole } = setup({ onChange, value: 'banana' })

    const combobox = getByRole('combobox')

    await user.click(combobox)

    await user.click(getByRole('option', { name: 'Apple' }))

    expect(onChange).toHaveBeenCalledWith('apple')
  })

  test('Uncontrolled) 초기 선택값이 있으면 해당 옵션이 선택된다.', async () => {
    const { user, getByRole } = setup({ defaultValue: 'banana' })

    const combobox = getByRole('combobox')

    expect(combobox).toHaveTextContent('Banana')

    await user.click(combobox)

    expect(getByRole('option', { name: 'Banana' })).toHaveAttribute(
      'aria-selected',
      'true',
    )
  })

  test('Uncontrolled) 옵션을 선택하면 해당 옵션이 선택된다.', async () => {
    const { user, getByRole } = setup()

    await user.click(getByRole('combobox'))

    await user.click(getByRole('option', { name: 'Banana' }))

    expect(getByRole('combobox')).toHaveTextContent('Banana')
  })

  test('Controlled) 초기 선택값이 있으면 해당 옵션이 선택된다.', async () => {
    const { user, getByRole } = setup({ value: 'banana' })

    const combobox = getByRole('combobox')

    expect(combobox).toHaveTextContent('Banana')

    await user.click(combobox)

    expect(getByRole('option', { name: 'Banana' })).toHaveAttribute(
      'aria-selected',
      'true',
    )
  })

  test('value와 defaultValue가 모두 주어지면 value가 우선된다.', () => {
    const { getByRole } = setup({ value: 'banana', defaultValue: 'apple' })

    expect(getByRole('combobox')).toHaveTextContent('Banana')
  })

  test('키보드로 탐색이 가능하다.', async () => {
    const { user, getByRole } = setup()

    const combobox = getByRole('combobox')

    await user.tab()

    expect(combobox).toHaveFocus()

    await user.keyboard('{Enter}')

    expect(getByRole('option', { name: 'Apple' })).toHaveFocus()

    await user.keyboard('{ArrowDown}')

    expect(getByRole('option', { name: 'Banana' })).toHaveFocus()

    await user.keyboard('{ArrowDown}')

    expect(getByRole('option', { name: 'Cherry' })).toHaveFocus()

    await user.keyboard('{Enter}')

    expect(combobox).toHaveTextContent('Cherry')
  })
})
