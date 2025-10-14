import { render } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { ToggleGroup, type ToggleGroupProps } from '.'

const defaultOptions = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Cherry', value: 'cherry' },
]

const mockOnChange = vi.fn()

const setup = ({
  options = defaultOptions,
  onChange = mockOnChange,
  ...props
}: Partial<ToggleGroupProps> = {}) => ({
  user: userEvent.setup(),
  ...render(<ToggleGroup options={options} onChange={onChange} {...props} />),
})

describe('[Shared] <ToggleGroup>', () => {
  test('주어진 옵션으로 토글 버튼들을 표시한다.', () => {
    const { getByRole } = setup()

    expect(getByRole('button', { name: 'Apple' })).toBeInTheDocument()
    expect(getByRole('button', { name: 'Banana' })).toBeInTheDocument()
    expect(getByRole('button', { name: 'Cherry' })).toBeInTheDocument()
  })

  test('value가 주어지면 해당 버튼이 활성화되어 표시된다.', () => {
    const { getByRole } = setup({ value: 'banana' })

    expect(getByRole('button', { name: 'Banana' })).toHaveAttribute(
      'aria-pressed',
      'true',
    )
  })

  test('버튼을 클릭하면 onChange가 호출된다.', async () => {
    const { getByRole, user } = setup()

    await user.click(getByRole('button', { name: 'Banana' }))

    expect(mockOnChange).toHaveBeenCalledWith('banana')
  })

  test('defaultValue가 주어지고 value가 주어지지 않을 때, 해당 버튼이 활성화되어 표시된다.', () => {
    const { getByRole } = setup({ defaultValue: 'banana' })

    expect(getByRole('button', { name: 'Banana' })).toHaveAttribute(
      'aria-pressed',
      'true',
    )
  })

  test('defaultValue가 주어지고 value가 주어지지 않을 때, 버튼을 클릭하면 해당 버튼이 활성화되고 이전 버튼은 비활성화된다.', async () => {
    const { user, getByRole } = setup({ defaultValue: 'banana' })

    await user.click(getByRole('button', { name: 'Apple' }))

    expect(mockOnChange).toHaveBeenCalledWith('apple')

    expect(getByRole('button', { name: 'Banana' })).toHaveAttribute(
      'aria-pressed',
      'false',
    )

    expect(getByRole('button', { name: 'Apple' })).toHaveAttribute(
      'aria-pressed',
      'true',
    )
  })
})
