import { useMenuGroupContext } from '@/source/features/layout/ui/MenuGroup/useMenuGroupContext'
import { Menu } from '@/source/shared/ui/Menu'

export const BlogMenu = () => {
  const { mode } = useMenuGroupContext()

  return (
    <Menu mode={mode}>
      <Menu.Link href="#">Blog</Menu.Link>
    </Menu>
  )
}
