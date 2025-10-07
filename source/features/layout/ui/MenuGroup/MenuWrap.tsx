import { TRANSITION_DURATION } from '@/source/features/layout/ui/MenuGroup/constants'
import { useMenuGroupContext } from '@/source/features/layout/ui/MenuGroup/useMenuGroupContext'
import { useMountTransition } from '@/source/shared/lib/hooks/useMountTransition'
import { cva } from 'class-variance-authority'
import type { PropsWithChildren } from 'react'

interface MenuWrapProps {
  className?: string
}

export const MenuWrap = ({
  className,
  children,
}: PropsWithChildren<MenuWrapProps>) => {
  const { mode, isOpen } = useMenuGroupContext()
  const { isShown } = useMountTransition({
    isOpen,
    duration: TRANSITION_DURATION,
  })

  const cn = mode === 'popup' ? popupCn : accordionCn

  return <div className={cn({ isShown, className })}>{children}</div>
}

const popupCn = cva()

const accordionCn = cva(
  [
    /** transition */
    `transition-all duration-${TRANSITION_DURATION} ease-[cubic-bezier(0.34,1.56,0.64,1)`,
  ],
  {
    variants: {
      isShown: {
        true: 'opacity-100 translate-x-0',
        false: 'opacity-0 translate-x-[-30px]',
      },
    },
  },
)
