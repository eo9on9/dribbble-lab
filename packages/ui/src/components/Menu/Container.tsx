import { cva } from 'class-variance-authority'
import { type PropsWithChildren } from 'react'
import { useMenuContext } from './Context'

export const Container = ({ children }: PropsWithChildren) => {
  const { mode, setIsExpanded } = useMenuContext()

  const handleMouseEnter = () => {
    if (mode === 'pc') setIsExpanded(true)
  }

  const handleMouseLeave = () => {
    if (mode === 'pc') setIsExpanded(false)
  }

  return (
    <div
      className={wrapClassName()}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  )
}

const wrapClassName = cva('relative inline-flex')
