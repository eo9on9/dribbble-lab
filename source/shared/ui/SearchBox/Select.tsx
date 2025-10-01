import { CheckIcon, SelectArrowIcon } from '@/source/shared/ui/icons'
import type { SelectOption } from '@/source/shared/ui/SearchBox/types'
import {
  SelectContent,
  SelectGroup,
  SelectIcon,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectPortal,
  Select as SelectRoot,
  SelectTrigger,
  SelectValue,
  SelectViewport,
} from '@radix-ui/react-select'
import { cva } from 'class-variance-authority'

export interface SelectProps {
  placeholder?: string
  value?: string
  options?: SelectOption[]
  onChange?: (value: string) => void
}

export const Select = ({
  placeholder,
  value,
  options,
  onChange,
}: SelectProps) => {
  return (
    <div>
      <SelectRoot value={value} onValueChange={onChange}>
        <SelectTrigger className={triggerClassName()} aria-label="Category">
          <SelectValue placeholder={placeholder} />
          <SelectIcon>
            <SelectArrowIcon width={10} height={10} />
          </SelectIcon>
        </SelectTrigger>
        <SelectPortal>
          <SelectContent
            className={contentClassName()}
            position="popper"
            sideOffset={4}
          >
            <SelectViewport>
              <SelectGroup>
                {options?.map(option => (
                  <SelectItem
                    className={itemClassName()}
                    value={option.value}
                    key={option.value}
                  >
                    <SelectItemText>{option.label}</SelectItemText>
                    <SelectItemIndicator>
                      <CheckIcon width={10} height={8} />
                    </SelectItemIndicator>
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectViewport>
          </SelectContent>
        </SelectPortal>
      </SelectRoot>
    </div>
  )
}

const triggerClassName = cva([
  /** layout */
  'flex gap-1 items-center h-10 outline-0',
  /** text */
  'text-sm text-drb-black font-semibold',
  /** interaction */
  'cursor-pointer hover:text-drb-gray-700 focus:text-drb-gray-700',
])
const contentClassName = cva([
  /** layout */
  'p-3 rounded-lg bg-white shadow-panel',
  /** animation */
  'animate-slide-down',
])

const itemClassName = cva([
  /** layout */
  'flex items-center min-w-30 h-9 px-3 rounded-lg',
  /** text */
  'text-sm text-drb-black',
  /** interaction */
  'cursor-pointer outline-0 data-[state=checked]:font-semibold hover:bg-gray-100 focus:bg-gray-100',
])
