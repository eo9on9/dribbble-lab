import type { PolymorphicComponentProps } from '@/source/shared/ui/types'
import { cva } from 'class-variance-authority'
import type { ElementType } from 'react'

interface ButtonCustomProps {
  variant?: 'primary' | 'secondary'
  size?: 'lg' | 'md'
}

export type ButtonProps<T extends ElementType = 'button'> =
  PolymorphicComponentProps<T, ButtonCustomProps>

export const Button = <T extends ElementType = 'button'>({
  as = 'button',
  variant = 'primary',
  size = 'lg',
  className,
  ...props
}: ButtonProps<T>) => {
  const Component = as

  return <Component {...props} className={cn({ variant, size, className })} />
}

const cn = cva(
  [
    /** layout */
    'inline-flex items-center justify-center rounded-full outline-0',
    /** text */
    'font-semibold',
    /** interaction */
    'cursor-pointer focus-visible:ring-2 focus-visible:ring-drb-ring',
    /** transition */
    'transition-all duration-50 ease-[cubic-bezier(0.32,0,0.59,0.03)]',
  ],
  {
    variants: {
      variant: {
        primary: 'bg-drb-black text-white hover:bg-drb-gray-800',
        secondary:
          'border-[1.5px] border-drb-gray-300 bg-white text-drb-black hover:border-drb-gray-500',
      },
      size: {
        lg: 'h-12 px-6 text-sm tablet:h-10',
        md: 'h-10 px-5 text-[13px]',
      },
    },
  },
)
