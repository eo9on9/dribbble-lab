import { useMountTransition } from '@/source/shared/lib/hooks/useMountTransition'
import {
  createContext,
  useContext,
  useId,
  useState,
  type PropsWithChildren,
} from 'react'

interface SubPanelContextValue {
  id: string
  isCreated: boolean
  isShown: boolean
  show: () => void
  hide: () => void
  toggle: () => void
}

const subPanelContext = createContext<SubPanelContextValue | undefined>(
  undefined,
)

export const SubPanelContextProvider = ({ children }: PropsWithChildren) => {
  const id = useId()
  const [isOpen, setIsOpen] = useState(false)
  const { isCreated, isShown } = useMountTransition({ isOpen, duration: 300 })

  const value = {
    id,
    isCreated,
    isShown,
    show: () => setIsOpen(true),
    hide: () => setIsOpen(false),
    toggle: () => setIsOpen(prev => !prev),
  }

  return (
    <subPanelContext.Provider value={value}>
      {children}
    </subPanelContext.Provider>
  )
}

export const useSubPanelContext = () => {
  const context = useContext(subPanelContext)

  if (!context)
    throw new Error(
      'useSubPanelContext must be used within a SubPanelContextProvider',
    )

  return context
}
