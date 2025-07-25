import { cva } from 'class-variance-authority'
import { type PropsWithChildren } from 'react'

export const ItemText = ({ children }: PropsWithChildren) => {
  return <span className={wrapClassName()}>{children}</span>
}

const wrapClassName = cva('')
