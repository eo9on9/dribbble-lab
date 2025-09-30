import type { Mode } from '@/source/shared/ui/Menu/types'
import { createContext, useContext, type PropsWithChildren } from 'react'

const ModeContext = createContext<Mode | undefined>(undefined)

interface DeviceContextProviderProps {
  mode: Mode
}

export const ModeContextProvider = ({
  mode,
  children,
}: PropsWithChildren<DeviceContextProviderProps>) => {
  return <ModeContext.Provider value={mode}>{children}</ModeContext.Provider>
}

export const useModeContext = () => {
  const context = useContext(ModeContext)

  if (!context) {
    throw new Error('useModeContext must be used within a ModeContextProvider')
  }

  return context
}
