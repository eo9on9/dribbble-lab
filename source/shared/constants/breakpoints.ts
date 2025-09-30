export type Device = 'pc' | 'tablet' | 'mobile'

export const DEFAULT_DEVICE: Device = 'mobile'

export const BREAKPOINTS: Record<
  Exclude<Device, typeof DEFAULT_DEVICE>,
  number
> = {
  tablet: 790,
  pc: 1200,
} as const
