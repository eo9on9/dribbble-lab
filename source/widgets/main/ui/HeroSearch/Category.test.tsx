import { CATEGORIES } from '@/source/shared/constants/categories'
import { render } from '@testing-library/react'
import { Category } from './Category'
import { HeroSearchProvider } from './useHeroSearchContext'

const setup = () => {
  return render(
    <HeroSearchProvider>
      <Category />
    </HeroSearchProvider>,
  )
}

describe('[Widgets] <HeroSearch> - <Category>', () => {
  test('카테고리 목록을 라디오로 표시한다.', () => {
    const { getByRole } = setup()

    CATEGORIES.forEach(category => {
      getByRole(`radio`, { name: category.label })
    })
  })

  test('첫 번째 카테고리가 선택된 채로 표시한다.', () => {
    const { getByRole } = setup()

    expect(getByRole(`radio`, { name: CATEGORIES[0].label })).toBeChecked()
  })

  test('카테고리를 클릭하면 해당 카테고리가 선택된다.', () => {
    const { getByRole } = setup()

    const category = CATEGORIES[1]

    getByRole(`radio`, { name: category.label }).click()

    expect(getByRole(`radio`, { name: category.label })).toBeChecked()
  })
})
