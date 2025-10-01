import type { ComponentPropsWithRef, ElementType } from 'react'

export type PolymorphicComponentProps<
  T extends ElementType,
  Props = {},
> = ComponentPropsWithRef<T> &
  Props & {
    as?: T
  }
