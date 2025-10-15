import { cva } from 'class-variance-authority'
import { type PropsWithChildren } from 'react'
import { useFormFieldContext } from './useFormFieldContext'

export const Label = ({ children }: PropsWithChildren) => {
  const { id } = useFormFieldContext()

  return (
    <span className={labelClassName()}>
      <label htmlFor={id}>{children}</label>
    </span>
  )
}

const labelClassName = cva([
  /** layout */
  'flex-auto',

  /** text */
  'text-sm font-semibold text-gray-900',
])
