import { render } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { FormField, type FormFieldClearProps } from '.'

const onClick = vi.fn()
const setup = ({
  clearProps,
}: { clearProps?: Partial<FormFieldClearProps> } = {}) => ({
  user: userEvent.setup(),
  ...render(
    <FormField>
      <FormField.Head>
        <FormField.Label>First Name</FormField.Label>
        <FormField.Clear onClick={onClick} {...clearProps} />
      </FormField.Head>
      <FormField.Body>
        <input type="text" />
      </FormField.Body>
    </FormField>,
  ),
})

describe('[Shared] <FormField>', () => {
  test('레이블 클릭 시 폼 요소가 포커스된다.', async () => {
    const { user, getByText, getByRole } = setup()

    await user.click(getByText('First Name'))

    expect(getByRole('textbox', { name: 'First Name' })).toHaveFocus()
  })

  describe('클리어 버튼:', () => {
    test('클리어 버튼은 visible 속성이 true일 때 렌더링된다.', async () => {
      const { getByRole } = setup({ clearProps: { visible: true } })

      expect(getByRole('button', { name: 'Clear' })).toBeInTheDocument()
    })

    test('클리어 버튼은 visible 속성이 false일 때 렌더링되지 않는다.', async () => {
      const { queryByRole } = setup({ clearProps: { visible: false } })

      expect(queryByRole('button', { name: 'Clear' })).not.toBeInTheDocument()
    })

    test('클리어 버튼 클릭 시 onClick 속성이 호출된다.', async () => {
      const { user, getByRole } = setup({ clearProps: { visible: true } })

      await user.click(getByRole('button', { name: 'Clear' }))

      expect(onClick).toHaveBeenCalled()
    })

    test('클리어 버튼 클릭 시 폼 요소가 포커스된다.', async () => {
      const { user, getByRole } = setup({
        clearProps: { visible: true },
      })

      await user.click(getByRole('button', { name: 'Clear' }))

      expect(getByRole('textbox', { name: 'First Name' })).toHaveFocus()
    })
  })
})
