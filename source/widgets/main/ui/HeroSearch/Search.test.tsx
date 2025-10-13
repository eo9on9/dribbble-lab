import type { KindOfCategories } from '@/source/shared/constants/categories'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { render } from '@testing-library/react'
import { PLACEHOLDER_MAP, Search } from './Search'

const useHeroSearchContext = vi.hoisted(vi.fn)
vi.mock('./useHeroSearchContext', () => ({
  useHeroSearchContext,
}))

const setup = (category: KindOfCategories) => {
  const queryClient = new QueryClient()

  useHeroSearchContext.mockReturnValue({ category })

  return render(
    <QueryClientProvider client={queryClient}>
      <Search />
    </QueryClientProvider>,
  )
}

describe('[Widgets] <HeroSearch> - <Search>', () => {
  test('카테고리가 shots일 때 플레이스홀더를 표시한다.', () => {
    const { getByPlaceholderText } = setup('shots')

    getByPlaceholderText(PLACEHOLDER_MAP['shots'])
  })
  test('카테고리가 designers일 때 플레이스홀더를 표시한다.', () => {
    const { getByPlaceholderText } = setup('designers')

    getByPlaceholderText(PLACEHOLDER_MAP['designers'])
  })
  test('카테고리가 services일 때 플레이스홀더를 표시한다.', () => {
    const { getByPlaceholderText } = setup('services')

    getByPlaceholderText(PLACEHOLDER_MAP['services'])
  })
})
