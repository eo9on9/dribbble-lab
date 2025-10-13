import type { KindOfCategories } from '@/source/shared/constants/categories'
import { render } from '@testing-library/react'
import { Recommends, RECOMMENDS_MAP } from './Recommends'

const useHeroSearchContext = vi.hoisted(vi.fn)
vi.mock('./useHeroSearchContext', () => ({
  useHeroSearchContext,
}))

const setup = (category: KindOfCategories) => {
  useHeroSearchContext.mockReturnValue({ category })

  return render(<Recommends />)
}

describe('[Widgets] <HeroSearch> - <Recommends>', () => {
  test('카테고리가 shots일 때 인기 검색어를 표시한다.', () => {
    const { getByRole } = setup('shots')

    RECOMMENDS_MAP['shots'].forEach(item => {
      getByRole(`link`, { name: item })
    })
  })
  test('카테고리가 designers일 때 인기 검색어를 표시한다.', () => {
    const { getByRole } = setup('designers')

    RECOMMENDS_MAP['designers'].forEach(item => {
      getByRole(`link`, { name: item })
    })
  })
  test('카테고리가 services일 때 인기 검색어를 표시한다.', () => {
    const { getByRole } = setup('services')

    RECOMMENDS_MAP['services'].forEach(item => {
      getByRole(`link`, { name: item })
    })
  })
})
