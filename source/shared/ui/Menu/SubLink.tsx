import { useModeContext } from '@/source/shared/ui/Menu/useModeContext'
import { cva } from 'class-variance-authority'
import NextLink from 'next/link'
import type { ComponentProps } from 'react'

export const SubLink = ({
  className,
  ...props
}: ComponentProps<typeof NextLink>) => {
  const mode = useModeContext()

  return <NextLink {...props} className={cn({ className, mode })} />
}

const cn = cva(
  [
    /** layout */
    'flex w-full items-center gap-2',
    /** text */
    'text-sm text-drb-black',
    /** interaction */
    'cursor-pointer hover:text-drb-gray-700',
  ],
  {
    variants: {
      mode: {
        accordion: 'py-4',
        popup: 'py-3',
      },
    },
  },
)
