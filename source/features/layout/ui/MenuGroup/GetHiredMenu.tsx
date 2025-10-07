import { IconWrap } from '@/source/features/layout/ui/MenuGroup/IconWrap'
import { ProBadge } from '@/source/features/layout/ui/MenuGroup/ProBadge'
import { Strong } from '@/source/features/layout/ui/MenuGroup/Strong'
import { useMenuGroupContext } from '@/source/features/layout/ui/MenuGroup/useMenuGroupContext'
import { AdvertiseIcon, JobsIcon, UpgradeIcon } from '@/source/shared/ui/icons'
import { Menu } from '@/source/shared/ui/Menu'

export const GetHiredMenu = () => {
  const { mode } = useMenuGroupContext()

  return (
    <Menu mode={mode}>
      <Menu.Trigger>Get Hired</Menu.Trigger>
      <Menu.SubPanel>
        <Menu.SubLink href="#">
          <IconWrap>
            <UpgradeIcon />
          </IconWrap>
          <Strong>Upgrade to</Strong>
          <ProBadge />
        </Menu.SubLink>
        <Menu.SubLink href="#">
          <IconWrap>
            <AdvertiseIcon />
          </IconWrap>
          <Strong>Advertise</Strong>
        </Menu.SubLink>
        <Menu.SubLink href="#">
          <IconWrap>
            <JobsIcon />
          </IconWrap>
          <Strong>Full-Time Jobs</Strong>
        </Menu.SubLink>
      </Menu.SubPanel>
    </Menu>
  )
}
