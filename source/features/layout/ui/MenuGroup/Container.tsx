import { TRANSITION_DURATION } from '@/source/features/layout/ui/MenuGroup/constants'
import { useMenuGroupContext } from '@/source/features/layout/ui/MenuGroup/useMenuGroupContext'
import { useMountTransition } from '@/source/shared/lib/hooks/useMountTransition'
import { cva } from 'class-variance-authority'
import { type PropsWithChildren } from 'react'

export const Container = ({ children }: PropsWithChildren) => {
  const { mode, isOpen } = useMenuGroupContext()
  const { isCreated, isShown } = useMountTransition({
    isOpen,
    duration: TRANSITION_DURATION,
  })

  const containerCn = mode === 'popup' ? popupCn : accordionCn

  return (
    <div className={wrapper()}>
      {(mode === 'popup' || isCreated) && (
        <div className={containerCn({ isShown })}>{children}</div>
      )}
    </div>
  )
}

const wrapper = cva([
  /** layout */
  'relative',
])

const popupCn = cva([
  /** layout */
  'flex items-center gap-8',
])

const accordionCn = cva(
  [
    /** layout */
    `absolute top-0 left-0 w-full px-8 py-4 bg-white`,
    /** transition */
    `transition-opacity duration-${TRANSITION_DURATION} ease-in-out`,
  ],
  {
    variants: {
      isShown: {
        true: 'opacity-100',
        false: 'opacity-0',
      },
    },
  },
)
