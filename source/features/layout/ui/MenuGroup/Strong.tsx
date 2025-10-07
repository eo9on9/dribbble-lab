import type { PropsWithChildren } from 'react'

export const Strong = ({ children }: PropsWithChildren) => {
  return <span className="font-semibold">{children}</span>
}
