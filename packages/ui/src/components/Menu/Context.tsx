import {
  createContext,
  type PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react'
import { type MenuMode } from './types'

interface MenuContextValue {
  mode: MenuMode
  isExpanded: boolean
  setIsExpanded: (isExpanded: boolean) => void
}

const MenuContext = createContext<MenuContextValue | undefined>(undefined)

interface MenuProviderProps {
  mode: MenuMode
}

export const MenuProvider = ({
  mode,
  children,
}: PropsWithChildren<MenuProviderProps>) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const value = {
    mode,
    isExpanded,
    setIsExpanded,
  }

  useEffect(() => setIsExpanded(false), [mode])

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>
}

export const useMenuContext = () => {
  const context = useContext(MenuContext)

  if (!context) {
    throw new Error('useMenuContext must be used within a MenuProvider')
  }

  return context
}
