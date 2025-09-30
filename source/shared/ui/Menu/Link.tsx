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
  'inline-flex items-center gap-1.5 py-4 pc:py-0',
  /** text */
  'text-lg font-bold text-drb-black pc:text-sm pc:font-semibold',
  /** interaction */
  'cursor-pointer hover:text-drb-black-hover',
])
