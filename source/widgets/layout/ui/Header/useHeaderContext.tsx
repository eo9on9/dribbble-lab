import type { Device } from '@/source/shared/constants/breakpoints'
import { useDeviceStore } from '@/source/shared/store/useDeviceStore'
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from 'react'

interface HeaderContextValue {
  device: Device
  isSearchToggle: boolean
  isFixed: boolean
  isMenuOpen: boolean
  setIsMenuOpen: (isMenuOpen: boolean) => void
  isSearchOpen: boolean
  setIsSearchOpen: (isSearchOpen: boolean) => void
}

const HeaderContext = createContext<HeaderContextValue | undefined>(undefined)

interface HeaderContextProviderProps {
  isSearchToggle: boolean
  isFixed: boolean
}

export const HeaderContextProvider = ({
  isSearchToggle,
  isFixed,
  children,
}: PropsWithChildren<HeaderContextProviderProps>) => {
  const device = useDeviceStore(s => s.device)

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(!isSearchToggle)

  useEffect(() => setIsMenuOpen(false), [device])

  return (
    <HeaderContext.Provider
      value={{
        device,
        isSearchToggle,
        isFixed,
        isMenuOpen,
        setIsMenuOpen,
        isSearchOpen,
        setIsSearchOpen,
      }}
    >
      {children}
    </HeaderContext.Provider>
  )
}

export const useHeaderContext = () => {
  const context = useContext(HeaderContext)

  if (!context) {
    throw new Error(
      'useHeaderContext must be used within a HeaderContextProvider',
    )
  }

  return context
}
