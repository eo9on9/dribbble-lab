import { cva } from 'class-variance-authority'
import type { PropsWithChildren } from 'react'

export const ButtonBadge = ({ children }: PropsWithChildren) => {
  return <div className={cn()}>{children}</div>
}

const cn = cva([
  /** layout */
  'absolute top-1 -right-[18px]',
])
