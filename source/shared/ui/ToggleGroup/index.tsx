import type { ToggleGroupOption } from '@/source/shared/ui/ToggleGroup/types'
import { useState } from 'react'
import { Button } from './Button'
import { Scroller } from './Scroller'

export interface ToggleGroupProps {
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
  options: ToggleGroupOption[]
}

export const ToggleGroup = ({
  value,
  defaultValue,
  onChange,
  options,
}: ToggleGroupProps) => {
  const [innerValue, setInnerValue] = useState(defaultValue)

  const _value = value ?? innerValue

  const handleChange = (value: string) => {
    if (value === _value) return

    setInnerValue(value)
    onChange?.(value)
  }

  return (
    <Scroller>
      {options.map(o => (
        <Button
          key={o.value}
          active={_value === o.value}
          onClick={() => handleChange(o.value)}
        >
          {o.label}
        </Button>
      ))}
    </Scroller>
  )
}
