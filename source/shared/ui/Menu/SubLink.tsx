import { useModeContext } from '@/source/shared/ui/Menu/useModeContext'
import { cva } from 'class-variance-authority'
import NextLink from 'next/link'
import type { ComponentProps } from 'react'

interface SubLinkProps extends ComponentProps<typeof NextLink> {
  strong?: boolean
}

export const SubLink = ({ strong, className, ...props }: SubLinkProps) => {
  const mode = useModeContext()

  return <NextLink {...props} className={cn({ className, strong, mode })} />
}

const cn = cva(
  [
    /** layout */
    'block',
    /** text */
    'text-drb-black',
    /** interaction */
    'cursor-pointer hover:text-drb-black-hover',
  ],
  {
    variants: {
      strong: {
        true: 'font-semibold',
      },
      mode: {
        accordion: 'py-4',
        popup: 'py-3 text-sm',
      },
    },
  },
)
