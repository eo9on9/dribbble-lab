import { Body } from './Body'
import { Clear, type ClearProps } from './Clear'
import { Head } from './Head'
import { Label } from './Label'
import { Root } from './Root'

export const FormField = Object.assign(Root, {
  Head,
  Label,
  Clear,
  Body,
})

export type { ClearProps as FormFieldClearProps }
