import { useModeContext } from '@/source/shared/ui/Menu/useModeContext'
import { useSubPanelContext } from '@/source/shared/ui/Menu/useSubPanelContext'
import { cva } from 'class-variance-authority'
import { useRef, type PropsWithChildren } from 'react'

export const SubPanel = ({ children }: PropsWithChildren) => {
  const mode = useModeContext()
  const { id, isCreated, isShown, onHidden } = useSubPanelContext()
  const ref = useRef<HTMLDivElement>(null)

  const maxHeight =
    mode === 'accordion' && !isShown ? 0 : ref.current?.scrollHeight
  const panelCn = mode === 'accordion' ? accordionCn : popupCn

  if (!isCreated) return null

  return (
    <div className={wrapperCn({ mode })}>
      <div
        id={id}
        ref={ref}
        className={panelCn({ isShown })}
        onTransitionEnd={onHidden}
        style={{ maxHeight }}
        role="menu"
      >
        {children}
      </div>
    </div>
  )
}

const wrapperCn = cva(null, {
  variants: {
    mode: {
      accordion: null,
      popup: 'absolute top-full left-0 pt-4',
    },
  },
})

const accordionCn = cva([
  /** layout */
  'overflow-hidden bg-white',
  /** transition */
  'transition-[max-height] duration-350 ease-[cubic-bezier(0.87,0,0.13,1)]',
])

const popupCn = cva(
  [
    /** layout */
    'w-[230px] p-6 rounded-lg bg-white shadow-panel',
    /** transition */
    'transition-[opacity,translate] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]',
  ],
  {
    variants: {
      isShown: {
        true: 'opacity-100 translate-y-0',
        false: 'opacity-0 -translate-y-2.5',
      },
    },
  },
)
