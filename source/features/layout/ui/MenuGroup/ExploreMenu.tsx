import { IconWrap } from '@/source/features/layout/ui/MenuGroup/IconWrap'
import { Strong } from '@/source/features/layout/ui/MenuGroup/Strong'
import { useMenuGroupContext } from '@/source/features/layout/ui/MenuGroup/useMenuGroupContext'
import { NoteworthyIcon, PopularIcon } from '@/source/shared/ui/icons'
import { Menu } from '@/source/shared/ui/Menu'

export const ExploreMenu = () => {
  const { mode } = useMenuGroupContext()

  return (
    <Menu mode={mode}>
      <Menu.Trigger>Explore</Menu.Trigger>
      <Menu.SubPanel>
        <Menu.SubLink href="#">
          <IconWrap>
            <PopularIcon />
          </IconWrap>
          <Strong>Popular</Strong>
        </Menu.SubLink>
        <Menu.SubLink href="#">
          <IconWrap>
            <NoteworthyIcon />
          </IconWrap>
          <Strong>New and Noteworthy</Strong>
        </Menu.SubLink>
        <Menu.Divider />
        <Menu.SubLink href="#">Product Design</Menu.SubLink>
        <Menu.SubLink href="#">Web Design</Menu.SubLink>
        <Menu.SubLink href="#">Animation</Menu.SubLink>
        <Menu.SubLink href="#">Branding</Menu.SubLink>
        <Menu.SubLink href="#">Illustration</Menu.SubLink>
        <Menu.SubLink href="#">Mobile</Menu.SubLink>
        <Menu.SubLink href="#">Typography</Menu.SubLink>
        <Menu.SubLink href="#">Print</Menu.SubLink>
      </Menu.SubPanel>
    </Menu>
  )
}
