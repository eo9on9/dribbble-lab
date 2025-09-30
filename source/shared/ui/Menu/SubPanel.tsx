import { useDeviceContext } from '@/source/shared/ui/Menu/useDeviceContext'
import { useSubPanelContext } from '@/source/shared/ui/Menu/useSubPanelContext'
import { cva } from 'class-variance-authority'
import { useRef, type PropsWithChildren } from 'react'

export const SubPanel = ({ children }: PropsWithChildren) => {
  const device = useDeviceContext()
  const { id, isCreated, isShown, onHidden } = useSubPanelContext()
  const ref = useRef<HTMLDivElement>(null)

  const transitionType = device === 'pc' ? 'popup' : 'accordion'
  const maxHeight =
    transitionType === 'accordion' && !isShown ? 0 : ref.current?.scrollHeight
  const panelCn = transitionType === 'accordion' ? accordionCn : popupCn

  if (!isCreated) return null

  return (
    <div className={wrapperCn()}>
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

const wrapperCn = cva([
  /** layout */
  'pc:absolute pc:top-full pc:left-0 pc:pt-4',
])

const panelBaseCn = cva([
  /** layout */
  'overflow-hidden bg-white pc:w-[230px] pc:p-6 pc:rounded-lg pc:shadow-panel',
])

const accordionCn = cva([
  /** base */
  panelBaseCn(),
  /** transition */
  'transition-[max-height] duration-350 ease-[cubic-bezier(0.87,0,0.13,1)]',
])

const popupCn = cva(
  [
    /** base */
    panelBaseCn(),
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
