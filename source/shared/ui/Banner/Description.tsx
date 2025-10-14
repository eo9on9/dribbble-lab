import { cva } from 'class-variance-authority'
import type { PropsWithChildren } from 'react'

export const Description = ({ children }: PropsWithChildren) => {
  return <p className={cn()}>{children}</p>
}

const cn = cva([
  /** text */
  'text-sm text-drb-gray-850',
])
