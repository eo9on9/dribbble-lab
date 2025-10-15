import { render } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { Input, type InputProps } from '.'

const onChange = vi.fn()
const onFocus = vi.fn()
const onBlur = vi.fn()
const setup = (props: Partial<InputProps> = {}) => ({
  user: userEvent.setup(),
  ...render(
    <>
      <label htmlFor="1">Address</label>
      <Input
        id="1"
        onChange={e => onChange(e.target.value)}
        onFocus={onFocus}
        onBlur={onBlur}
        {...props}
      />
    </>,
  ),
})

describe('[Shared] <Input>', () => {
  test('label을 클릭하면 인풋에 포커스된다.', async () => {
    const { user, getByLabelText, getByRole } = setup()

    await user.click(getByLabelText('Address'))

    expect(getByRole('textbox', { name: 'Address' })).toHaveFocus()
  })

  test('defaultValue와 value가 제공되지 않으면 placeholder가 표시된다.', () => {
    const { getByPlaceholderText } = setup({
      placeholder: 'Please enter your address',
    })

    getByPlaceholderText('Please enter your address')
  })

  test('defaultValue가 제공되면 해당 텍스트를 가진채 표시된다.', () => {
    const { getByRole } = setup({ defaultValue: 'Seoul' })

    expect(getByRole('textbox', { name: 'Address' })).toHaveValue('Seoul')
  })

  test('value가 제공되면 해당 텍스트를 가진채 표시된다.', () => {
    const { getByRole } = setup({ value: 'Seoul' })

    expect(getByRole('textbox', { name: 'Address' })).toHaveValue('Seoul')
  })

  test('인풋에 텍스트를 입력하면 onChange 함수가 호출된다.', async () => {
    const { user, getByRole } = setup()

    await user.type(getByRole('textbox', { name: 'Address' }), 'Seoul')

    expect(onChange).toHaveBeenCalledWith('Seoul')
  })

  test('인풋에 포커스되면 onFocus 함수가 호출된다.', async () => {
    const { user, getByRole } = setup()

    await user.click(getByRole('textbox', { name: 'Address' }))

    expect(onFocus).toHaveBeenCalled()
  })

  test('인풋에서 포커스가 해제되면 onBlur 함수가 호출된다.', async () => {
    const { user, getByRole } = setup()

    await user.click(getByRole('textbox', { name: 'Address' }))

    await user.click(document.body)

    expect(onBlur).toHaveBeenCalled()
  })

  describe('prefix가 주어질 때:', () => {
    test('인풋에 값도 없고 포커스도 없으면 접두사는 표시되지 않는다.', () => {
      const { queryByLabelText } = setup({ prefix: '#' })

      expect(queryByLabelText('prefix')).not.toBeInTheDocument()
    })
    test('인풋에 값이 있고 포커스가 없으면 접두사는 표시된다.', () => {
      const { getByLabelText } = setup({ prefix: '#', defaultValue: 'Seoul' })

      expect(getByLabelText('prefix')).toBeInTheDocument()
    })
    test('인풋에 값이 없고 포커스가 있으면 접두사는 표시된다.', async () => {
      const { user, getByLabelText } = setup({ prefix: '#' })

      await user.click(getByLabelText('Address'))

      expect(getByLabelText('prefix')).toBeInTheDocument()
    })
    test('인풋에 값이 있고 포커스가 있으면 접두사는 표시된다.', async () => {
      const { user, getByLabelText } = setup({ prefix: '#', value: 'Seoul' })

      await user.click(getByLabelText('Address'))

      expect(getByLabelText('prefix')).toBeInTheDocument()
    })
  })
})
