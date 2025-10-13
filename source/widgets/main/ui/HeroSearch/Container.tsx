import { cva } from 'class-variance-authority'
import type { PropsWithChildren } from 'react'

export const Container = ({ children }: PropsWithChildren) => {
  return <div className={cn()}>{children}</div>
}

const cn = cva([
  /** layout */
  'flex flex-col gap-3',
])
