import { cva } from 'class-variance-authority'
import { type PropsWithChildren } from 'react'

export interface SubItemProps {
  onClick?: () => void
}

export const SubItem = ({
  onClick,
  children,
}: PropsWithChildren<SubItemProps>) => {
  return (
    <div role="listitem">
      <button className={buttonClassName()} onClick={onClick} role="menuitem">
        {children}
      </button>
    </div>
  )
}

const buttonClassName = cva(
  'flex items-center w-full py-3 text-sm text-gray-900 cursor-pointer hover:opacity-70',
)
