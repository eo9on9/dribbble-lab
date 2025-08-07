import { CheckIcon, SelectArrowIcon } from '#icons'
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
import { forwardRef, type HTMLAttributes } from 'react'

export type SelectOptions = {
  /** 값 */
  value: string

  /** 라벨 */
  label: string
}

export interface SelectProps
  extends Omit<HTMLAttributes<HTMLButtonElement>, 'onChange'> {
  /** 값 */
  value?: string

  /** 값 변경 호출 함수 */
  onChange: (value: string) => void

  /** 옵션 목록 */
  options: SelectOptions[]

  /** 플레이스홀더 */
  placeholder?: string
}

export const Select = forwardRef<HTMLButtonElement, SelectProps>(
  ({ value, onChange, options, placeholder, className, ...props }, ref) => {
    return (
      <SelectRoot value={value} onValueChange={onChange}>
        <SelectTrigger
          className={cva([triggerClassName(), className])()}
          ref={ref}
          {...props}
        >
          <SelectValue placeholder={placeholder} />
          <SelectIcon>
            <SelectArrowIcon width={10} height={10} />
          </SelectIcon>
        </SelectTrigger>
        <SelectPortal>
          <SelectContent
            className={contentClassName()}
            position="popper"
            sideOffset={8}
          >
            <SelectViewport>
              <SelectGroup>
                {options.map(option => (
                  <SelectItem
                    key={option.value}
                    value={option.value}
                    className={itemClassName()}
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
  },
)

Select.displayName = 'Select'

const triggerClassName = cva([
  /* layout */
  'flex gap-3 items-center justify-between h-10 px-4 border border-gray-300 rounded-lg',
  /* text */
  'text-gray-900 font-semibold text-sm',
  /* interactivity */
  'cursor-pointer outline-0',
  /* case: focus */
  'focus:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.03)]',
  /** case: hover */
  'hover:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.03)]',
])

const contentClassName = cva([
  /* layout */
  'min-w-[var(--radix-select-trigger-width)] p-3 border border-gray-300 rounded-lg bg-white',
])

const itemClassName = cva([
  /* layout */
  'flex items-center justify-between gap-3 min-w-[160px] h-9 px-3 rounded-lg',
  /* text */
  'text-xs text-gray-900',
  /* interactivity */
  'cursor-pointer outline-0',
  /* case: checked */
  'data-[state=checked]:font-semibold data-[state=checked]:bg-gray-100',
  /* case: hover */
  'hover:bg-gray-50 focus:bg-gray-50',
])
