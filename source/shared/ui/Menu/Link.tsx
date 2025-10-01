import { useModeContext } from '@/source/shared/ui/Menu/useModeContext'
import { cva } from 'class-variance-authority'
import NextLink from 'next/link'
import type { ComponentProps } from 'react'

export const Link = ({
  className,
  ...props
}: ComponentProps<typeof NextLink>) => {
  const mode = useModeContext()

  return <NextLink {...props} className={cn({ className, mode })} />
}

const cn = cva(
  [
    /** layout */
    'inline-flex items-center gap-1.5 py-4',
    /** text */
    'text-lg font-bold text-drb-black',
    /** interaction */
    'cursor-pointer hover:text-drb-gray-700',
    /** mode */
  ],
  {
    variants: {
      mode: {
        accordion: null,
        popup: 'py-0 text-sm font-semibold',
      },
    },
  },
)
