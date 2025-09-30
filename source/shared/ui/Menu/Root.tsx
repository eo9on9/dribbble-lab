import { Container } from '@/source/shared/ui/Menu/Container'
import type { Mode } from '@/source/shared/ui/Menu/types'
import { ModeContextProvider } from '@/source/shared/ui/Menu/useModeContext'
import { SubPanelContextProvider } from '@/source/shared/ui/Menu/useSubPanelContext'
import { type PropsWithChildren } from 'react'

interface RootProps {
  mode?: Mode
}

export const Root = ({
  mode = 'popup',
  children,
}: PropsWithChildren<RootProps>) => {
  return (
    <ModeContextProvider mode={mode}>
      <SubPanelContextProvider>
        <Container>{children}</Container>
      </SubPanelContextProvider>
    </ModeContextProvider>
  )
}
