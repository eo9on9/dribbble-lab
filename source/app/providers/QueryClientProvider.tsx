'use client'

import {
  QueryClient,
  QueryClientProvider as QueryClientProviderCore,
} from '@tanstack/react-query'
import { useState, type PropsWithChildren } from 'react'

export const QueryClientProvider = ({ children }: PropsWithChildren) => {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProviderCore client={queryClient}>
      {children}
    </QueryClientProviderCore>
  )
}
