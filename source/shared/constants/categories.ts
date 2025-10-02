import type { SelectOption } from '@/source/shared/ui/SearchBox/types'

export const CATEGORIES = [
  {
    label: 'Shots',
    value: 'shots',
  },
  {
    label: 'Designers',
    value: 'designers',
  },
  {
    label: 'Services',
    value: 'services',
  },
] as const satisfies SelectOption[]
