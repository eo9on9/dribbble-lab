import { CheckIcon, SelectArrowIcon } from '@/source/shared/ui/icons'
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

export interface SelectOption {
  label: string
  value: string
}

export interface SelectProps {
  name?: string
  placeholder?: string
  value?: string
  options?: SelectOption[]
  onChange?: (value: string) => void
  defaultValue?: string
}

export const Select = ({
  placeholder,
  value,
  options,
  onChange,
  name,
  defaultValue,
}: SelectProps) => {
  return (
    <SelectRoot
      name={name}
      defaultValue={defaultValue}
      value={value}
      onValueChange={onChange}
    >
      <SelectTrigger className={triggerClassName()}>
        <SelectValue placeholder={placeholder} />
        <SelectIcon>
          <SelectArrowIcon width={10} height={10} />
        </SelectIcon>
      </SelectTrigger>
      <SelectPortal>
        <SelectContent
          className={contentClassName()}
          position="popper"
          sideOffset={12}
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
  )
}

const triggerClassName = cva([
  /** layout */
  'flex gap-3 items-center justify-between min-w-[115px] h-10 px-[18px] outline-0 border border-drb-gray-300 rounded-lg',
  /** text */
  'text-sm font-medium text-drb-black',
  /** interaction */
  'cursor-pointer hover:text-drb-gray-700 focus:text-drb-gray-700 focus-ring',
])
const contentClassName = cva([
  /** layout */
  'p-3 border border-drb-gray-300 rounded-lg bg-white shadow-panel',
])

const itemClassName = cva([
  /** layout */
  'flex items-center justify-between gap-2 min-w-30 h-10 px-3 rounded-lg',
  /** text */
  'text-xs font-medium text-drb-black',
  /** interaction */
  'cursor-pointer outline-0 hover:bg-drb-gray-30 focus:bg-drb-gray-30 data-[state=checked]:font-semibold data-[state=checked]:bg-drb-gray-50',
])
