import {
  BREAKPOINTS,
  DEFAULT_DEVICE,
  type Device,
} from '@/source/shared/constants/breakpoints'
import { create } from 'zustand'

interface DeviceStoreValue {
  device: Device
  setDevice: (width: number) => void
}

export const useDeviceStore = create<DeviceStoreValue>(set => ({
  device: DEFAULT_DEVICE,
  setDevice: (width: number) => {
    let device: Device = DEFAULT_DEVICE
    if (width >= BREAKPOINTS.pc) device = 'pc'
    else if (width >= BREAKPOINTS.tablet) device = 'tablet'
    else device = 'mobile'
    set({ device })
  },
}))
