import {
  createContext,
  type PropsWithChildren,
  useContext,
  useState,
} from 'react'

interface BoxControlContextValue {
  isFocused: boolean
  setIsFocused: (isFocused: boolean) => void

  isHovered: boolean
  setIsHovered: (isHovered: boolean) => void
}

const BoxControlContext = createContext<BoxControlContextValue | undefined>(
  undefined,
)

export const BoxControlProvider = ({ children }: PropsWithChildren) => {
  const [isFocused, setIsFocused] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const value = {
    isFocused,
    setIsFocused,
    isHovered,
    setIsHovered,
  }

  return (
    <BoxControlContext.Provider value={value}>
      {children}
    </BoxControlContext.Provider>
  )
}

export const useBoxControlContext = () => {
  const context = useContext(BoxControlContext)
  if (!context) {
    throw new Error('useBoxContext must be used within a BoxProvider')
  }
  return context
}
