import { ChevronIcon } from '@/source/shared/ui/icons'
import { useDeviceContext } from '@/source/shared/ui/Menu/useDeviceContext'
import { useSubPanelContext } from '@/source/shared/ui/Menu/useSubPanelContext'
import { cva } from 'class-variance-authority'
import { type PropsWithChildren } from 'react'

export const Trigger = ({ children }: PropsWithChildren) => {
  const device = useDeviceContext()
  const { id, isCreated, toggle, show } = useSubPanelContext()

  const handleClick = () => {
    if (device === 'pc') return

    toggle()
  }

  const handleFocus = () => {
    if (device !== 'pc') return

    show()
  }

  return (
    <button
      className={triggerCn()}
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

const triggerCn = cva([
  /** layout */
  'inline-flex items-center gap-1.5 py-4 pc:py-0',
  /** text */
  'text-lg font-bold text-drb-black pc:text-sm pc:font-semibold',
  /** interaction */
  'cursor-pointer hover:text-drb-black-hover',
])

const iconCn = cva([
  /** layout */
  'w-[9px] h-2',
])
