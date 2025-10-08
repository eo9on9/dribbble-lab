import { SearchBoldIcon } from '@/source/shared/ui/icons'
import { useHeaderContext } from '@/source/widgets/layout/ui/Header/useHeaderContext'
import { cva } from 'class-variance-authority'

export const SearchTriggerSection = () => {
  const { device, isSearchOpen, setIsSearchOpen, isFixed } = useHeaderContext()

  if (device !== 'mobile') return null

  if (!isFixed) return null

  return (
    <button
      className={cn()}
      onClick={() => setIsSearchOpen(!isSearchOpen)}
      aria-label="Toggle searchbox"
    >
      <SearchBoldIcon />
    </button>
  )
}

const cn = cva([
  /** layout */
  'flex items-center justify-center w-6 h-6',
  /** text */
  'text-drb-black',
  /** interaction */
  'cursor-pointer outline-0',
])
