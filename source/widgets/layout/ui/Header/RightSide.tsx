import { cva } from 'class-variance-authority'
import type { PropsWithChildren } from 'react'

export const RightSide = ({ children }: PropsWithChildren) => {
  return <div className={cn()}>{children}</div>
}

const cn = cva([
  /** layout */
  'flex items-center gap-4',
])
