import { cva } from 'class-variance-authority'
import type { PropsWithChildren } from 'react'

export const ButtonText = ({ children }: PropsWithChildren) => {
  return <div className={cn()}>{children}</div>
}

const cn = cva([
  /** text */
  'text-sm font-semibold text-drb-black',
])
