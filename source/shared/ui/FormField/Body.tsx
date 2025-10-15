import { cva } from 'class-variance-authority'
import {
  cloneElement,
  isValidElement,
  type PropsWithChildren,
  type ReactElement,
} from 'react'
import { useFormFieldContext } from './useFormFieldContext'

export const Body = ({ children: _children }: PropsWithChildren) => {
  const { id } = useFormFieldContext()

  if (!isValidElement(_children)) {
    console.warn('FormField.Body expects a single ReactElement as its child.')
    return null
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const children = cloneElement(_children as ReactElement<any>, { id })

  return <div className={bodyClassName()}>{children}</div>
}

const bodyClassName = cva([
  /** layout */
  'w-full',
])
