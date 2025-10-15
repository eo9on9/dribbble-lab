import { cva } from 'class-variance-authority'
import { type PropsWithChildren } from 'react'

export const Head = ({ children }: PropsWithChildren) => {
  return <div className={headClassName()}>{children}</div>
}

const headClassName = cva([
  /** layout */
  'flex items-center justify-between gap-4 w-full',
])
