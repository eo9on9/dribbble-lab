import { Container } from '@/source/widgets/layout/ui/Header/Container'
import { LeftSide } from '@/source/widgets/layout/ui/Header/LeftSide'
import { LoginSection } from '@/source/widgets/layout/ui/Header/LoginSection'
import { LogoSection } from '@/source/widgets/layout/ui/Header/LogoSection'
import { MenuSection } from '@/source/widgets/layout/ui/Header/MenuSection'
import { MenuTriggerSection } from '@/source/widgets/layout/ui/Header/MenuTriggerSection'
import { RightSide } from '@/source/widgets/layout/ui/Header/RightSide'
import { SearchSection } from '@/source/widgets/layout/ui/Header/SearchSection'
import { SearchTriggerSection } from '@/source/widgets/layout/ui/Header/SearchTriggerSection'
import { SignupSection } from '@/source/widgets/layout/ui/Header/SignupSection'
import { HeaderContextProvider } from '@/source/widgets/layout/ui/Header/useHeaderContext'

interface HeaderProps {
  isSearchToggle?: boolean
  isFixed?: boolean
}

export const Header = ({
  isSearchToggle = false,
  isFixed = false,
}: HeaderProps) => {
  return (
    <HeaderContextProvider isSearchToggle={isSearchToggle} isFixed={isFixed}>
      <Container>
        <LeftSide>
          <MenuTriggerSection />
          <LogoSection />
          <SearchSection />
          <MenuSection />
        </LeftSide>
        <RightSide>
          <SearchTriggerSection />
          <SignupSection />
          <LoginSection />
        </RightSide>
      </Container>
    </HeaderContextProvider>
  )
}
