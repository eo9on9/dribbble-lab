import '@testing-library/jest-dom'

import { cleanup } from '@testing-library/react'
import { afterAll, afterEach, beforeAll, vi } from 'vitest'

beforeAll(() => {
  // jsdom mocking
  if (!Element.prototype.hasPointerCapture) {
    Element.prototype.hasPointerCapture = vi.fn()
  }
  if (!Element.prototype.scrollIntoView) {
    Element.prototype.scrollIntoView = vi.fn()
  }
})

afterEach(() => {
  cleanup()

  vi.clearAllMocks()
})

afterAll(() => {
  vi.resetAllMocks()
})
