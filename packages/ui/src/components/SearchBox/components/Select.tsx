import { SelectArrowIcon } from '#icons'
import {
  SelectContent,
  SelectGroup,
  SelectIcon,
  SelectItem,
  SelectItemText,
  SelectPortal,
  Select as SelectRoot,
  SelectTrigger,
  SelectValue,
  SelectViewport,
} from '@radix-ui/react-select'
import { cva } from 'class-variance-authority'
import { SelectOption } from '../types'

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
            <SelectArrowIcon className={iconClassName()} />
          </SelectIcon>
        </SelectTrigger>
        <SelectPortal>
          <SelectContent
            className={contentClassName()}
            position="popper"
            sideOffset={4}
          >
            <SelectViewport className={viewportClassName()}>
              <SelectGroup>
                {options?.map(option => (
                  <SelectItem
                    className={itemClassName()}
                    value={option.value}
                    key={option.value}
                  >
                    <SelectItemText>{option.label}</SelectItemText>
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

const triggerClassName = cva(
  'flex gap-1 items-center h-10 text-sm text-gray-900 font-semibold cursor-pointer outline-0',
)
const contentClassName = cva(
  'p-3 bg-white shadow-md rounded-lg animate-slide-down',
)
const viewportClassName = cva('')

const itemClassName = cva(
  'flex items-center min-w-30 h-9 px-3 rounded-lg text-sm text-gray-900 cursor-pointer outline-0 data-[state=checked]:font-semibold hover:bg-gray-100 focus:bg-gray-100',
)

const iconClassName = cva('w-3 h-3')
