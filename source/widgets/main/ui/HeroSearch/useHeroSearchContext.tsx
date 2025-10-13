import {
  CATEGORIES,
  type KindOfCategories,
} from '@/source/shared/constants/categories'
import {
  createContext,
  useContext,
  useState,
  type PropsWithChildren,
} from 'react'

interface HeroSearchContextValue {
  category: KindOfCategories
  setCategory: (category: KindOfCategories) => void
}

const HeroSearchContext = createContext<HeroSearchContextValue | undefined>(
  undefined,
)

export const HeroSearchProvider = ({ children }: PropsWithChildren) => {
  const [category, setCategory] = useState<KindOfCategories>(
    CATEGORIES[0].value,
  )

  return (
    <HeroSearchContext.Provider value={{ category, setCategory }}>
      {children}
    </HeroSearchContext.Provider>
  )
}

export const useHeroSearchContext = () => {
  const context = useContext(HeroSearchContext)

  if (!context) {
    throw new Error(
      'useHeroSearchContext must be used within a HeroSearchProvider',
    )
  }
  return context
}
