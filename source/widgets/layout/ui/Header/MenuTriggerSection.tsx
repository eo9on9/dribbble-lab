import { MenuGroupTrigger } from '@/source/features/layout/ui/MenuGroupTrigger'
import { useHeaderContext } from '@/source/widgets/layout/ui/Header/useHeaderContext'

export const MenuTriggerSection = () => {
  const { device, isMenuOpen, setIsMenuOpen } = useHeaderContext()

  if (device === 'pc') return null

  return (
    <div>
      <MenuGroupTrigger isOpen={isMenuOpen} onClick={setIsMenuOpen} />
    </div>
  )
}
