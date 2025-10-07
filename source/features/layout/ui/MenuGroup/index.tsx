import { BlogMenu } from '@/source/features/layout/ui/MenuGroup/BlogMenu'
import { EACH_MENU_DELAY } from '@/source/features/layout/ui/MenuGroup/constants'
import { Container } from '@/source/features/layout/ui/MenuGroup/Container'
import { ExploreMenu } from '@/source/features/layout/ui/MenuGroup/ExploreMenu'
import { FindTalentMenu } from '@/source/features/layout/ui/MenuGroup/FindTalentMenu'
import { GetHiredMenu } from '@/source/features/layout/ui/MenuGroup/GetHiredMenu'
import { MenuWrap } from '@/source/features/layout/ui/MenuGroup/MenuWrap'
import { MenuGroupContextProvider } from '@/source/features/layout/ui/MenuGroup/useMenuGroupContext'
import type { Device } from '@/source/shared/constants/breakpoints'
import type { Mode } from '@/source/shared/ui/Menu/types'

interface MenuGroupProps {
  /** 디바이스 정보 */
  device: Device

  /** 메뉴 그룹 열림 상태 */
  isOpen: boolean
}

export const MenuGroup = ({ device, isOpen }: MenuGroupProps) => {
  const mode: Mode = device === 'pc' ? 'popup' : 'accordion'

  return (
    <MenuGroupContextProvider mode={mode} isOpen={isOpen}>
      <Container>
        <MenuWrap className={`delay-${EACH_MENU_DELAY * 0}`}>
          <ExploreMenu />
        </MenuWrap>
        <MenuWrap className={`delay-${EACH_MENU_DELAY * 1}`}>
          <FindTalentMenu />
        </MenuWrap>
        <MenuWrap className={`delay-${EACH_MENU_DELAY * 2}`}>
          <GetHiredMenu />
        </MenuWrap>
        <MenuWrap className={`delay-${EACH_MENU_DELAY * 3}`}>
          <BlogMenu />
        </MenuWrap>
      </Container>
    </MenuGroupContextProvider>
  )
}
