import { cva } from 'class-variance-authority'
import { type PropsWithChildren } from 'react'
import { useMenuContext } from './Context'

export interface ItemProps {
  onClick?: () => void
}

export const Item = ({ children, onClick }: PropsWithChildren<ItemProps>) => {
  const { mode, isExpanded, setIsExpanded } = useMenuContext()

  const handleClick = () => {
    if (mode === 'mobile') setIsExpanded(!isExpanded)

    onClick?.()
  }

  return (
    <button className={buttonClassName()} onClick={handleClick} role="menuitem">
      {children}
    </button>
  )
}

const buttonClassName = cva(
  'flex items-center gap-1 h-8 px-4 text-sm font-semibold text-gray-900 cursor-pointer hover:opacity-70',
)
