import { MenuGroup } from '@/source/features/layout/ui/MenuGroup'
import { useHeaderContext } from '@/source/widgets/layout/ui/Header/useHeaderContext'
import { cva } from 'class-variance-authority'

export const MenuSection = () => {
  const { device, isMenuOpen } = useHeaderContext()

  return (
    <div className={cn()}>
      <MenuGroup device={device} isOpen={isMenuOpen} />
    </div>
  )
}

const cn = cva([
  /** layout */
  'absolute top-full left-0 w-full bg-white pc:static pc:w-auto pc:pl-4',
])
