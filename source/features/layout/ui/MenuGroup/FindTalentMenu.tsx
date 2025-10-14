import { IconWrap } from '@/source/features/layout/ui/MenuGroup/IconWrap'
import { Strong } from '@/source/features/layout/ui/MenuGroup/Strong'
import { useMenuGroupContext } from '@/source/features/layout/ui/MenuGroup/useMenuGroupContext'
import { NewBadge } from '@/source/shared/ui/badges'
import {
  BrowseIcon,
  HireIcon,
  MatchIcon,
  PostIcon,
  PurchaseIcon,
} from '@/source/shared/ui/icons'
import { Menu } from '@/source/shared/ui/Menu'

export const FindTalentMenu = () => {
  const { mode } = useMenuGroupContext()

  return (
    <Menu mode={mode}>
      <Menu.Trigger>Find Talent</Menu.Trigger>
      <Menu.SubPanel>
        <Menu.SubLink href="#">
          <IconWrap>
            <MatchIcon />
          </IconWrap>
          <Strong>Get Matched Now</Strong>
          <NewBadge />
        </Menu.SubLink>
        <Menu.SubLink href="#">
          <IconWrap>
            <BrowseIcon />
          </IconWrap>
          <Strong>Browse Profiles</Strong>
        </Menu.SubLink>
        <Menu.SubLink href="#">
          <IconWrap>
            <PurchaseIcon />
          </IconWrap>
          <Strong>Purchase Services</Strong>
        </Menu.SubLink>
        <Menu.SubLink href="#">
          <IconWrap>
            <HireIcon />
          </IconWrap>
          <Strong>Hire Fractional Talent</Strong>
        </Menu.SubLink>
        <Menu.SubLink href="#">
          <IconWrap>
            <PostIcon />
          </IconWrap>
          <Strong>Post a Full-Time Job</Strong>
        </Menu.SubLink>
      </Menu.SubPanel>
    </Menu>
  )
}
