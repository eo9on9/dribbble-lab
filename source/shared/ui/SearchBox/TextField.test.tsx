import { BoxControlProvider } from '@/source/shared/ui/SearchBox/BoxControlContext'
import { SuggestionControlProvider } from '@/source/shared/ui/SearchBox/SuggestionControlContext'
import { render } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { useState } from 'react'
import { Container } from './Container'
import { TextField } from './TextField'

const SUGGESTIONS = ['one', 'two', 'three']

const Tester = () => {
  const [value, setValue] = useState('')

  return (
    <BoxControlProvider>
      <SuggestionControlProvider suggestions={SUGGESTIONS}>
        <Container>
          <TextField value={value} onChange={setValue} />
        </Container>
      </SuggestionControlProvider>
    </BoxControlProvider>
  )
}

const setup = () => ({
  user: userEvent.setup(),
  ...render(<Tester />),
})

describe('[Component] SearchBox - TextField', () => {
  test('input에 글자를 입력하면 제안 목록이 표시된다.', async () => {
    const { user, getByRole } = setup()

    await user.type(getByRole('textbox'), 'o')

    expect(getByRole('listbox')).toBeInTheDocument()
  })

  test('input 또는 제안 목록에서 포커스가 벗어나면 제안 목록이 닫힌다.', async () => {
    const { user, getByRole, queryByRole } = setup()

    await user.type(getByRole('textbox'), 'o')

    expect(getByRole('listbox')).toBeInTheDocument()

    await user.tab()

    expect(queryByRole('listbox')).not.toBeInTheDocument()
  })

  test('input에 글자 입력 중 아래 화살표를 누르면 다음 제안 항목으로 이동하고 input 값이 변경된다. (마지막 제안 항목에서 아래 화살표를 누르면 원래 입력중이던 글자로 input 값이 변경된다.)', async () => {
    const { user, getByRole } = setup()

    await user.type(getByRole('textbox'), 'o')

    expect(getByRole('listbox')).toBeInTheDocument()

    await user.keyboard('{ArrowDown}')

    expect(getByRole('textbox')).toHaveValue('one')

    await user.keyboard('{ArrowDown}')

    expect(getByRole('textbox')).toHaveValue('two')

    await user.keyboard('{ArrowDown}')

    expect(getByRole('textbox')).toHaveValue('three')

    await user.keyboard('{ArrowDown}')

    expect(getByRole('textbox')).toHaveValue('o')
  })

  test('input에 글자 입력 중 위 화살표를 누르면 이전 제안 항목으로 이동하고 input 값이 변경된다. (처음 제안 항목에서 위 화살표를 누르면 원래 입력중이던 글자로 input 값이 변경된다.)', async () => {
    const { user, getByRole } = setup()

    await user.type(getByRole('textbox'), 'o')

    expect(getByRole('listbox')).toBeInTheDocument()

    await user.keyboard('{ArrowUp}')

    expect(getByRole('textbox')).toHaveValue('three')

    await user.keyboard('{ArrowUp}')

    expect(getByRole('textbox')).toHaveValue('two')

    await user.keyboard('{ArrowUp}')

    expect(getByRole('textbox')).toHaveValue('one')

    await user.keyboard('{ArrowUp}')

    expect(getByRole('textbox')).toHaveValue('o')
  })

  test('input에 글자 입력 중 엔터를 누르면 제안 항목에서 엔터를 누르면 제안 목록이 닫힌다.', async () => {
    const { user, getByRole, queryByRole } = setup()

    await user.type(getByRole('textbox'), 'o')

    expect(getByRole('listbox')).toBeInTheDocument()

    await user.keyboard('{ArrowDown}')

    expect(getByRole('textbox')).toHaveValue('one')

    await user.keyboard('{Enter}')

    expect(queryByRole('listbox')).not.toBeInTheDocument()

    expect(getByRole('textbox')).toHaveValue('one')
  })

  test('input에 글자 입력 중 제안 목록을 마우스로 호버하면 해당 제안 항목이 강조된다. (input 값은 변경되지 않는다.)', async () => {
    const { user, getByRole } = setup()

    await user.type(getByRole('textbox'), 'o')

    expect(getByRole('listbox')).toBeInTheDocument()

    await user.hover(getByRole('option', { name: 'one' }))

    expect(getByRole('textbox')).toHaveValue('o')
  })

  test('input에 글자 입력 중 제안 목록을 마우스로 클릭하면 해당 제안 항목으로 input 값이 변경되고 제안 목록이 닫힌다.', async () => {
    const { user, getByRole, queryByRole } = setup()

    await user.type(getByRole('textbox'), 'o')

    expect(getByRole('listbox')).toBeInTheDocument()

    await user.click(getByRole('option', { name: 'one' }))

    expect(queryByRole('listbox')).not.toBeInTheDocument()

    expect(getByRole('textbox')).toHaveValue('one')
  })

  test('클리어 버튼을 클릭하면 input 값이 초기화된다.', async () => {
    const { user, getByRole } = setup()

    await user.type(getByRole('textbox'), 'o')

    await user.click(getByRole('button', { name: 'Clear' }))

    expect(getByRole('textbox')).toHaveValue('')
  })
})
