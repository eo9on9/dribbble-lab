import type { SelectOption } from '@/source/shared/ui/SearchBox/types'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { Select, type SelectProps } from './Select'

const OPTIONS: SelectOption[] = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Orange', value: 'orange' },
]

const onChange = vi.fn()
const setup = (props: Partial<SelectProps> = {}) => ({
  user: userEvent.setup(),
  ...render(
    <Select
      placeholder="Select fruit"
      options={OPTIONS}
      onChange={onChange}
      {...props}
    />,
  ),
})

describe('[Component] SearchBox - Select', () => {
  test('value가 설정되어있지 않으면 플레이스홀더가 표시된다.', () => {
    const { getByRole, getByText } = setup()

    expect(getByRole('combobox', { name: 'Category' })).toBeInTheDocument()
    expect(getByText('Select fruit')).toBeInTheDocument()
  })

  test('value가 설정되어 있으면 해당 옵션이 선택된다.', () => {
    const { getByRole, getByText } = setup({ value: 'banana' })

    expect(getByRole('combobox', { name: 'Category' })).toBeInTheDocument()
    expect(getByText('Banana')).toBeInTheDocument()
  })

  test('콤보박스를 클릭하면 옵션이 표시된다.', async () => {
    const { user, getByRole } = setup()

    await user.click(getByRole('combobox', { name: 'Category' }))

    expect(screen.getByRole('option', { name: 'Apple' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Banana' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Orange' })).toBeInTheDocument()
  })

  test('옵션을 선택하면 onChange 함수가 호출된다.', async () => {
    const { user, getByRole } = setup()

    await user.click(getByRole('combobox', { name: 'Category' }))

    await user.click(screen.getByRole('option', { name: 'Banana' }))

    expect(onChange).toHaveBeenCalledWith('banana')
  })
})
