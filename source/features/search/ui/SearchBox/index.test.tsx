import {
  SearchBox,
  type SearchBoxProps,
} from '@/source/features/search/ui/SearchBox'
import { CATEGORIES } from '@/source/shared/constants/categories'
import { render } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'

const useDebouncedGetSuggestion = vi.hoisted(vi.fn)
vi.mock('@/source/features/search/model/useDebouncedGetSuggestions', () => ({
  useDebouncedGetSuggestion,
}))

const setup = (
  props: SearchBoxProps = {},
  suggestions: string[] = [],
  isDebouncing: boolean = false,
) => {
  useDebouncedGetSuggestion.mockReturnValue({
    data: {
      suggestions,
    },
    isDebouncing,
  })

  return render(<SearchBox {...props} />)
}

describe('[Features] <SearchBox>', () => {
  test('컴포넌트가 렌더링된다.', () => {
    const { getByRole } = setup()

    getByRole('textbox')
  })

  test('셀렉트를 비활성화하면 카테고리 셀렉트가 표시되지 않는다.', () => {
    const { queryByRole } = setup({ selectDisabled: true })

    expect(
      queryByRole('combobox', { name: 'Category' }),
    ).not.toBeInTheDocument()
  })

  test('셀렉트를 비활성화하지 않으면 카테고리 첫번째 옵션이 선택되어 표시된다.', () => {
    const { getByRole } = setup()

    expect(getByRole('combobox', { name: 'Category' })).toHaveTextContent(
      CATEGORIES[0].label,
    )
  })

  test('셀렉트를 비활성화하지 않으면 셀렉트 클릭 시 카테고리 옵션이 표시된다.', async () => {
    const { getByRole } = setup()

    await userEvent.click(getByRole('combobox', { name: 'Category' }))

    expect(getByRole('option', { name: 'Shots' })).toBeInTheDocument()
    expect(getByRole('option', { name: 'Designers' })).toBeInTheDocument()
    expect(getByRole('option', { name: 'Services' })).toBeInTheDocument()
  })

  test('입력한 키워드가 변경하면 API가 호출된다.', async () => {
    const { getByRole } = setup()

    const input = getByRole('textbox')

    await userEvent.type(input, 'a')

    expect(useDebouncedGetSuggestion).toHaveBeenCalledWith('a')

    await userEvent.type(input, 'b')

    expect(useDebouncedGetSuggestion).toHaveBeenCalledWith('ab')

    await userEvent.type(input, 'c')

    expect(useDebouncedGetSuggestion).toHaveBeenCalledWith('abc')
  })

  test('API가 디바운싱 대기 중이면 제안 목록이 표시되지 않는다.', async () => {
    const { getByRole, queryByRole } = setup(
      {},
      ['test1', 'test2', 'test3'],
      true,
    )

    const input = getByRole('textbox')

    await userEvent.type(input, 'test')

    expect(queryByRole('listbox')).not.toBeInTheDocument()
  })

  test('API가 디바운싱 대기 중이 아니고 응답을 받으면 해당 제안 목록이 표시된다.', async () => {
    const { getByRole } = setup({}, ['test1', 'test2', 'test3'], false)

    const input = getByRole('textbox')

    await userEvent.type(input, 'test')

    getByRole('listbox')
    getByRole('option', { name: 'test1' })
    getByRole('option', { name: 'test2' })
    getByRole('option', { name: 'test3' })
  })
})
