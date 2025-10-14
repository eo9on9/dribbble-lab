import { cva } from 'class-variance-authority'
import type { PropsWithChildren } from 'react'

export const Button = ({ children }: PropsWithChildren) => {
  return (
    <div className={wrapperCn()}>
      <div className={gradientCn()} />
      <div className={contentCn()}>{children}</div>
    </div>
  )
}

const wrapperCn = cva([
  /** layout */
  'relative inline-flex p-0.5',
])

const gradientCn = cva([
  /** layout */
  'absolute top-[50%] left-[50%] w-full h-full -translate-x-1/2 -translate-y-1/2 rounded-full',
  /** animation */
  'animate-gradient-rotate',
])

const contentCn = cva([
  /** layout */
  'relative flex items-center gap-2 min-w-[180px] h-11 pl-2.5 pr-1.5 rounded-full bg-white',
])
