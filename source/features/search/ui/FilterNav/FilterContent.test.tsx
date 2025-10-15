import { render } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { FilterContent } from './FilterContent'

const setup = () => ({
  user: userEvent.setup(),
  ...render(<FilterContent isOpen={true} />),
})

describe('[Features] <FilterNav> - <FilterContent>', () => {
  test('태그 인풋이 표시된다.', () => {
    const { getByRole } = setup()

    getByRole('textbox', { name: 'Tags' })
  })
  test('태그 인풋에 값을 입력하면 클리어 버튼이 표시된다.', async () => {
    const { user, getByRole } = setup()

    await user.type(getByRole('textbox', { name: 'Tags' }), 'test')

    getByRole('button', { name: 'Clear' })
  })
  test('태그 클리어 버튼을 클릭하면 인풋의 값을 지운다.', async () => {
    const { user, getByRole } = setup()

    await user.type(getByRole('textbox', { name: 'Tags' }), 'test')

    await user.click(getByRole('button', { name: 'Clear' }))

    expect(getByRole('textbox', { name: 'Tags' })).toHaveValue('')
  })
  test('색상 인풋이 표시된다.', () => {
    const { getByRole } = setup()

    getByRole('textbox', { name: 'Color' })
  })
  test('색상 인풋에 값을 입력하면 클리어 버튼이 표시된다.', async () => {
    const { user, getByRole } = setup()

    await user.type(getByRole('textbox', { name: 'Color' }), 'test')

    getByRole('button', { name: 'Clear' })
  })
  test('색상 클리어 버튼을 클릭하면 인풋의 값을 지운다.', async () => {
    const { user, getByRole } = setup()

    await user.type(getByRole('textbox', { name: 'Color' }), 'test')

    await user.click(getByRole('button', { name: 'Clear' }))

    expect(getByRole('textbox', { name: 'Color' })).toHaveValue('')
  })
  test('시간 셀렉트가 표시된다.', () => {
    const { getByRole } = setup()

    getByRole('combobox', { name: 'Timeframe' })
  })
  test('시간 셀렉트의 기본 값은 "Now"이다.', () => {
    const { getByRole } = setup()

    expect(getByRole('combobox', { name: 'Timeframe' })).toHaveTextContent(
      'Now',
    )
  })
  test('시간 셀렉트 옵션들을 표시한다.', async () => {
    const { user, getByRole } = setup()

    await user.click(getByRole('combobox', { name: 'Timeframe' }))

    getByRole('option', { name: 'Now' })
    getByRole('option', { name: 'This Past Week' })
    getByRole('option', { name: 'This Past Month' })
    getByRole('option', { name: 'This Past Year' })
    getByRole('option', { name: 'All Time' })
  })
})
