import { useModeContext } from '@/source/shared/ui/Menu/useModeContext'
import { useSubPanelContext } from '@/source/shared/ui/Menu/useSubPanelContext'
import { cva } from 'class-variance-authority'
import { useRef, type PropsWithChildren } from 'react'

export const Container = ({ children }: PropsWithChildren) => {
  const mode = useModeContext()
  const { show, hide } = useSubPanelContext()

  const ref = useRef<HTMLDivElement>(null)

  const handleMouseEnter = () => {
    if (mode === 'popup') show()
  }

  const handleMouseLeave = () => {
    if (mode === 'popup') hide()
  }

  const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    if (mode === 'popup') {
      if (ref.current?.contains(e.relatedTarget)) return

      hide()
    }
  }

  return (
    <div
      ref={ref}
      className={cn({ mode })}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onBlur={handleBlur}
    >
      {children}
    </div>
  )
}

const cn = cva(
  [
    /** layout */
    'relative',
  ],
  {
    variants: {
      mode: {
        accordion: 'w-full',
        popup: 'inline-block',
      },
    },
  },
)
