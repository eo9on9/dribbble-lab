import type { PolymorphicComponentProps } from '@/source/shared/ui/types'
import { cva } from 'class-variance-authority'
import type { ElementType } from 'react'

export type LinkTextProps<T extends ElementType = 'a'> =
  PolymorphicComponentProps<T, {}>

export const LinkText = <T extends ElementType = 'a'>({
  as = 'a',
  className,
  ...props
}: LinkTextProps<T>) => {
  const Component = as

  return <Component {...props} className={cn({ className })} />
}

const cn = cva([
  /** layout */
  'inline-block',
  /** text */
  'text-sm font-semibold text-drb-black',
  /** interaction */
  'cursor-pointer hover:text-drb-gray-700 focus:text-drb-gray-700 focus-visible:ring-2 focus-visible:ring-drb-ring',
  /** transition */
  'transition-all duration-100 ease',
])
