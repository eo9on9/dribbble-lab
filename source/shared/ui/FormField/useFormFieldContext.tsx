import { createContext, type PropsWithChildren, useContext, useId } from 'react'

interface FormFieldContextValue {
  id: string
}

const FormFieldContext = createContext<FormFieldContextValue | undefined>(
  undefined,
)

export const FormFieldProvider = ({ children }: PropsWithChildren) => {
  const id = useId()

  return (
    <FormFieldContext.Provider value={{ id }}>
      {children}
    </FormFieldContext.Provider>
  )
}

export const useFormFieldContext = () => {
  const context = useContext(FormFieldContext)

  if (!context) {
    throw new Error('useFormFieldContext must be used within a FormField')
  }

  return context
}
