import { cva } from 'class-variance-authority'
import NextLink from 'next/link'
import type { ComponentProps } from 'react'

export const Link = ({
  className,
  ...props
}: ComponentProps<typeof NextLink>) => {
  return <NextLink {...props} className={cn({ className })} />
}

const cn = cva([
  /** layout */
  'block',
  /** text */
  'text-sm text-drb-black',
  /** interaction */
  'cursor-pointer hover:text-drb-black-hover',
])
