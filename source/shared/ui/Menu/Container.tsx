import { useDeviceContext } from '@/source/shared/ui/Menu/useDeviceContext'
import { useSubPanelContext } from '@/source/shared/ui/Menu/useSubPanelContext'
import { cva } from 'class-variance-authority'
import { useRef, type PropsWithChildren } from 'react'

export const Container = ({ children }: PropsWithChildren) => {
  const device = useDeviceContext()
  const { show, hide } = useSubPanelContext()

  const ref = useRef<HTMLDivElement>(null)

  const handleMouseEnter = () => {
    if (device !== 'pc') return

    show()
  }

  const handleMouseLeave = () => {
    if (device !== 'pc') return

    hide()
  }

  const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    if (device !== 'pc') return

    if (ref.current?.contains(e.relatedTarget)) return

    hide()
  }

  return (
    <div
      ref={ref}
      className={cn()}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onBlur={handleBlur}
    >
      {children}
    </div>
  )
}

const cn = cva([
  /** layout */
  'relative pc:inline-block',
])
