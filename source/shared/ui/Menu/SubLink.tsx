import { cva } from 'class-variance-authority'
import NextLink from 'next/link'
import type { ComponentProps } from 'react'

export const SubLink = ({
  className,
  ...props
}: ComponentProps<typeof NextLink>) => {
  return <NextLink {...props} className={cn({ className })} />
}

const cn = cva([
  /** layout */
  'block py-4',
  /** text */
  'text-drb-black pc:text-sm',
  /** interaction */
  'cursor-pointer hover:text-drb-black-hover',
])
