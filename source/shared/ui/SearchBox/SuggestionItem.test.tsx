import { render } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { SuggestionItem, type SuggestionItemProps } from './SuggestionItem'

const useSuggestionControlContext = vi.hoisted(vi.fn)
vi.mock('@/source/shared/ui/SearchBox/SuggestionControlContext', () => ({
  useSuggestionControlContext,
}))

const setActiveIndex = vi.fn()
useSuggestionControlContext.mockReturnValue({
  baseText: 'test',
  activeIndex: -1,
  setActiveIndex,
})

const onClick = vi.fn()
const setup = (props: Partial<SuggestionItemProps> = {}) => ({
  user: userEvent.setup(),
  ...render(
    <SuggestionItem
      index={0}
      suggestion="test suggestion"
      onClick={onClick}
      {...props}
    />,
  ),
})

describe('[Component] SearchBox - SuggestionItem', () => {
  test('제안 항목이 올바르게 렌더링된다.', () => {
    const { getByRole } = setup()

    expect(getByRole('option')).toBeInTheDocument()
    expect(getByRole('option')).toHaveTextContent('test suggestion')
  })

  test('baseText와 나머지 텍스트가 올바르게 분리되어 표시된다.', () => {
    const { getByRole } = setup({
      suggestion: 'test suggestion',
    })

    const option = getByRole('option')

    expect(option).toHaveTextContent('test')
    expect(option).toHaveTextContent('suggestion')
  })

  test('activeIndex가 현재 index와 같으면 active 상태가 된다.', () => {
    useSuggestionControlContext.mockReturnValue({
      baseText: 'test',
      activeIndex: 0,
      setActiveIndex,
    })

    const { getByRole } = setup({ index: 0 })

    expect(getByRole('option')).toHaveAttribute('aria-selected', 'true')
  })

  test('activeIndex가 현재 index와 다르면 active 상태가 아니다.', () => {
    useSuggestionControlContext.mockReturnValue({
      baseText: 'test',
      activeIndex: 1,
      setActiveIndex,
    })

    const { getByRole } = setup({ index: 0 })

    expect(getByRole('option')).toHaveAttribute('aria-selected', 'false')
  })

  test('마우스가 항목에 진입하면 setActiveIndex가 호출된다.', async () => {
    const { user, getByRole } = setup()

    await user.hover(getByRole('option'))

    expect(setActiveIndex).toHaveBeenCalledWith(0)
  })

  test('마우스가 항목에서 벗어나면 setActiveIndex가 -1로 호출된다.', async () => {
    const { user, getByRole } = setup()

    const option = getByRole('option')

    await user.hover(option)
    expect(setActiveIndex).toHaveBeenCalledWith(0)

    await user.unhover(option)
    expect(setActiveIndex).toHaveBeenCalledWith(-1)
  })

  test('항목을 클릭하면 onClick 함수가 호출된다.', async () => {
    const user = userEvent.setup()
    const onClick = vi.fn()

    const { getByRole } = render(
      <SuggestionItem
        index={0}
        suggestion="test suggestion"
        onClick={onClick}
      />,
    )

    await user.click(getByRole('option'))

    expect(onClick).toHaveBeenCalledWith('test suggestion')
  })
})
