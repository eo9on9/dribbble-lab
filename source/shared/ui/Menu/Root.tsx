import {
  DEFAULT_DEVICE,
  type Device,
} from '@/source/shared/constants/breakpoints'
import { Container } from '@/source/shared/ui/Menu/Container'
import { DeviceContextProvider } from '@/source/shared/ui/Menu/useDeviceContext'
import { SubPanelContextProvider } from '@/source/shared/ui/Menu/useSubPanelContext'
import { type PropsWithChildren } from 'react'

interface RootProps {
  device?: Device
}

export const Root = ({
  device = DEFAULT_DEVICE,
  children,
}: PropsWithChildren<RootProps>) => {
  return (
    <DeviceContextProvider device={device}>
      <SubPanelContextProvider>
        <Container>{children}</Container>
      </SubPanelContextProvider>
    </DeviceContextProvider>
  )
}
