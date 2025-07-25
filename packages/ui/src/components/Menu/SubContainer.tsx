import { cva } from 'class-variance-authority'
import { type PropsWithChildren, useEffect, useState } from 'react'
import { useMenuContext } from './Context'

export const SubContainer = ({ children }: PropsWithChildren) => {
  const { isExpanded } = useMenuContext()

  const [shouldRender, setShouldRender] = useState(false)

  useEffect(() => {
    if (isExpanded) {
      setShouldRender(true)
    } else {
      const timeout = setTimeout(() => {
        setShouldRender(false)
      }, 200)

      return () => clearTimeout(timeout)
    }
  }, [isExpanded])

  if (!shouldRender) return null

  return (
    <div className={wrapClassName()}>
      <div role="listbox" className={panelClassName({ isExpanded })}>
        {children}
      </div>
    </div>
  )
}

const wrapClassName = cva('absolute top-full left-0 pt-4')

const panelClassName = cva(
  'min-w-[230px] px-6 py-3 rounded-lg bg-white shadow-[0px_15px_50px_0px_rgba(27,32,50,0.1)]',
  {
    variants: {
      isExpanded: {
        true: 'animate-slide-down',
        false: 'animate-slide-down-reverse',
      },
    },
  },
)
