import { cva } from 'class-variance-authority'
import type { PropsWithChildren } from 'react'

export const ButtonIcon = ({ children }: PropsWithChildren) => {
  return <div className={cn()}>{children}</div>
}

const cn = cva([
  /** layout */
  'w-4 h-4',
  /** text */
  'text-[#956bcd]',
])
