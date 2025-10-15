import { cva } from 'class-variance-authority'
import { type PropsWithChildren } from 'react'
import { FormFieldProvider } from './useFormFieldContext'

export const Root = ({ children }: PropsWithChildren) => {
  return (
    <FormFieldProvider>
      <div className={wrapClassName()}>{children}</div>
    </FormFieldProvider>
  )
}

const wrapClassName = cva([
  /** layout */
  'flex flex-col gap-2',
])
