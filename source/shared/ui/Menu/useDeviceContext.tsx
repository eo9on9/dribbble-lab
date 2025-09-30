import type { Device } from '@/source/shared/constants/breakpoints'
import { createContext, useContext, type PropsWithChildren } from 'react'

const deviceContext = createContext<Device | undefined>(undefined)

interface DeviceContextProviderProps {
  device: Device
}

export const DeviceContextProvider = ({
  device,
  children,
}: PropsWithChildren<DeviceContextProviderProps>) => {
  return (
    <deviceContext.Provider value={device}>{children}</deviceContext.Provider>
  )
}

export const useDeviceContext = () => {
  const context = useContext(deviceContext)

  if (!context) {
    throw new Error(
      'useDeviceContext must be used within a DeviceContextProvider',
    )
  }

  return context
}
