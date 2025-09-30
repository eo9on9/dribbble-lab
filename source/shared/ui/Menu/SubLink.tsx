import { cva } from 'class-variance-authority'
import NextLink from 'next/link'
import type { ComponentProps } from 'react'

interface SubLinkProps extends ComponentProps<typeof NextLink> {
  strong?: boolean
}

export const SubLink = ({ strong, className, ...props }: SubLinkProps) => {
  return <NextLink {...props} className={cn({ className, strong })} />
}

const cn = cva(
  [
    /** layout */
    'block py-4',
    /** text */
    'text-drb-black pc:text-sm',
    /** interaction */
    'cursor-pointer hover:text-drb-black-hover',
  ],
  {
    variants: {
      strong: {
        true: 'font-semibold',
      },
    },
  },
)
