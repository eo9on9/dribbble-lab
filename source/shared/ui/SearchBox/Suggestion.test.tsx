import { render } from '@testing-library/react'
import { Suggestion } from './Suggestion'

const useSuggestionControlContext = vi.hoisted(vi.fn)
vi.mock('@/source/shared/ui/SearchBox/SuggestionControlContext', () => ({
  useSuggestionControlContext,
}))

vi.mock('./SuggestionItem', () => ({
  SuggestionItem: ({ suggestion }: { suggestion: string }) => (
    <div role="option">{suggestion}</div>
  ),
}))

describe('[Component] SearchBox - Suggestion', () => {
  test('value가 비어있으면 렌더링되지 않는다.', () => {
    useSuggestionControlContext.mockReturnValue({
      suggestions: ['one', 'two', 'three'],
      isOpen: true,
    })

    const { queryByRole } = render(<Suggestion value="" onClick={vi.fn()} />)

    expect(queryByRole('listbox')).not.toBeInTheDocument()
  })

  test('isOpen이 false면 렌더링되지 않는다.', () => {
    useSuggestionControlContext.mockReturnValue({
      suggestions: ['one', 'two', 'three'],
      isOpen: false,
    })

    const { queryByRole } = render(
      <Suggestion value="test" onClick={vi.fn()} />,
    )

    expect(queryByRole('listbox')).not.toBeInTheDocument()
  })

  test('value가 비어있지 않고 isOpen이 true면 렌더링된다.', () => {
    useSuggestionControlContext.mockReturnValue({
      suggestions: ['one', 'two', 'three'],
      isOpen: true,
    })

    const { getByRole } = render(<Suggestion value="test" onClick={vi.fn()} />)

    expect(getByRole('listbox')).toBeInTheDocument()
  })

  test('SuggestionItem이 렌더링된다.', () => {
    useSuggestionControlContext.mockReturnValue({
      suggestions: ['one', 'two', 'three'],
      isOpen: true,
    })

    const { getAllByRole, getByRole } = render(
      <Suggestion value="test" onClick={vi.fn()} />,
    )

    expect(getAllByRole('option')).toHaveLength(3)
    expect(getByRole('option', { name: 'one' })).toBeInTheDocument()
    expect(getByRole('option', { name: 'two' })).toBeInTheDocument()
    expect(getByRole('option', { name: 'three' })).toBeInTheDocument()
  })
})
