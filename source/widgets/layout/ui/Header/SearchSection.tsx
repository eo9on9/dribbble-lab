import { SearchBox } from '@/source/features/search/ui/SearchBox'
import { useMountTransition } from '@/source/shared/lib/hooks/useMountTransition'
import { useHeaderContext } from '@/source/widgets/layout/ui/Header/useHeaderContext'
import { cva } from 'class-variance-authority'

const TRANSITION_DURATION = 300

export const SearchSection = () => {
  const { device, isSearchOpen, isSearchToggle, isFixed } = useHeaderContext()
  const { isCreated, isShown } = useMountTransition({
    isOpen: isSearchOpen,
    duration: TRANSITION_DURATION,
  })

  if (device === 'mobile' && !isCreated) return null

  if (isSearchToggle && !isFixed) return null

  return (
    <div className={cn({ isShown })}>
      <SearchBox textPlaceholder="What are you looking for?" />
    </div>
  )
}

const cn = cva(
  [
    /** layout */
    'absolute top-full left-0 w-full pt-1 px-4 pb-2 bg-white tablet:static tablet:p-0 tablet:flex-1 tablet:max-w-[520px]',
    /** transition */
    `transition-[opacity,translate] duration-${TRANSITION_DURATION} ease-[cubic-bezier(0.87,0,0.13,1)] tablet:transition-none`,
  ],
  {
    variants: {
      isShown: {
        true: 'opacity-100 translate-y-0',
        false:
          'opacity-0 translate-y-[-15%] tablet:opacity-100 tablet:translate-y-0',
      },
    },
  },
)
