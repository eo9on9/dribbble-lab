import { type PropsWithChildren } from 'react'
import { Container } from './Container'
import { MenuProvider } from './Context'
import { type MenuMode } from './types'

export interface RootProps {
  mode?: MenuMode
}

export const Root = ({
  mode = 'pc',
  children,
}: PropsWithChildren<RootProps>) => {
  return (
    <MenuProvider mode={mode}>
      <Container>{children}</Container>
    </MenuProvider>
  )
}
