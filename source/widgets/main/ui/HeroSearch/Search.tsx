import { SearchBox } from '@/source/features/search/ui/SearchBox'
import type { KindOfCategories } from '@/source/shared/constants/categories'
import { useHeroSearchContext } from './useHeroSearchContext'

export const PLACEHOLDER_MAP: Record<KindOfCategories, string> = {
  shots: 'What type of design are you interested in?',
  designers: 'What type of designer do you need?',
  services: 'What do you need designed?',
}

export const Search = () => {
  const { category } = useHeroSearchContext()

  return (
    <SearchBox
      textPlaceholder={PLACEHOLDER_MAP[category]}
      selectDisabled
      size="lg"
    />
  )
}
