import {
  createContext,
  type PropsWithChildren,
  useContext,
  useState,
} from 'react'

interface SuggestionControlContextValue {
  suggestions: string[]

  baseText: string
  setBaseText: (baseText: string) => void

  activeIndex: number
  setActiveIndex: (index: number) => void

  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

const SuggestionControlContext = createContext<
  SuggestionControlContextValue | undefined
>(undefined)

interface SuggestionControlProviderProps {
  suggestions: string[]
}

export const SuggestionControlProvider = ({
  suggestions,

  children,
}: PropsWithChildren<SuggestionControlProviderProps>) => {
  const [baseText, setBaseText] = useState('')
  const [activeIndex, setActiveIndex] = useState(-1)
  const [isOpen, setIsOpen] = useState(false)

  const value = {
    suggestions,
    baseText,
    setBaseText,
    activeIndex,
    setActiveIndex,
    isOpen,
    setIsOpen,
  }

  return (
    <SuggestionControlContext.Provider value={value}>
      {children}
    </SuggestionControlContext.Provider>
  )
}

export const useSuggestionControlContext = () => {
  const context = useContext(SuggestionControlContext)
  if (!context) {
    throw new Error(
      'useSuggestionControlContext must be used within a SuggestionControlProvider',
    )
  }
  return context
}
