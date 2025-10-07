import type { Mode } from '@/source/shared/ui/Menu/types'
import { createContext, useContext, type PropsWithChildren } from 'react'

interface MenuGroupContextValue {
  mode: Mode
  isOpen: boolean
}

const MenuGroupContext = createContext<MenuGroupContextValue | undefined>(
  undefined,
)

export const MenuGroupContextProvider = ({
  mode,
  isOpen,
  children,
}: PropsWithChildren<MenuGroupContextValue>) => {
  const value = { mode, isOpen }

  return (
    <MenuGroupContext.Provider value={value}>
      {children}
    </MenuGroupContext.Provider>
  )
}

export const useMenuGroupContext = () => {
  const context = useContext(MenuGroupContext)

  if (!context) {
    throw new Error('useModeContext must be used within a ModeContextProvider')
  }

  return context
}
