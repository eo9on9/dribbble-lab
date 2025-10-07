import { cva } from 'class-variance-authority'
import type { PropsWithChildren } from 'react'

export const IconWrap = ({ children }: PropsWithChildren) => {
  return <span className={cn()}>{children}</span>
}

const cn = cva([
  /** layout */
  'w-5 h-5',
])
