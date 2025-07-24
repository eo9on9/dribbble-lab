import '@testing-library/jest-dom'

import { cleanup } from '@testing-library/react'
import { afterAll, afterEach } from 'vitest'

afterEach(() => {
  cleanup()

  vi.clearAllMocks()
})

afterAll(() => {
  vi.resetAllMocks()
})
