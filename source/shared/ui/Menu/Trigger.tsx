import { ChevronIcon } from '@/source/shared/ui/icons'
import { useModeContext } from '@/source/shared/ui/Menu/useModeContext'
import { useSubPanelContext } from '@/source/shared/ui/Menu/useSubPanelContext'
import { cva } from 'class-variance-authority'
import { type PropsWithChildren } from 'react'

export const Trigger = ({ children }: PropsWithChildren) => {
  const mode = useModeContext()
  const { id, isCreated, toggle, show } = useSubPanelContext()

  const handleClick = () => {
    if (mode === 'accordion') toggle()
  }

  const handleFocus = () => {
    if (mode === 'popup') show()
  }

  return (
    <button
      className={triggerCn({ mode })}
      onClick={handleClick}
      onFocus={handleFocus}
      role="button"
      aria-expanded={isCreated}
      aria-controls={id}
    >
      {children}
      <ChevronIcon className={iconCn()} />
    </button>
  )
}

const triggerCn = cva(
  [
    /** layout */
    'inline-flex items-center gap-1.5 py-4',
    /** text */
    'text-lg font-bold text-drb-black',
    /** interaction */
    'cursor-pointer hover:text-drb-black-hover',
    /** mode */
  ],
  {
    variants: {
      mode: {
        accordion: null,
        popup: 'py-0 text-sm font-semibold',
      },
    },
  },
)

const iconCn = cva([
  /** layout */
  'w-[9px] h-2',
])
