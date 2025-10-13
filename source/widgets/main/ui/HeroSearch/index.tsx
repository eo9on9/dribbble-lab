import { HeroSearchProvider } from '@/source/widgets/main/ui/HeroSearch/useHeroSearchContext'
import { Category } from './Category'
import { Container } from './Container'
import { Recommends } from './Recommends'
import { Search } from './Search'

export const HeroSearch = () => {
  return (
    <HeroSearchProvider>
      <Container>
        <Category />
        <Search />
        <Recommends />
      </Container>
    </HeroSearchProvider>
  )
}
