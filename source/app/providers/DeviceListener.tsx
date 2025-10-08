'use client'

import { useDeviceStore } from '@/source/shared/store/useDeviceStore'
import { useLayoutEffect } from 'react'

export const DeviceListener = () => {
  const setDevice = useDeviceStore(s => s.setDevice)
  const device = useDeviceStore(s => s.device)

  console.log(device)

  useLayoutEffect(() => {
    const handler = () => setDevice(window.innerWidth)

    handler()

    window.addEventListener('resize', handler)

    return () => window.removeEventListener('resize', handler)
  }, [setDevice])

  return null
}
