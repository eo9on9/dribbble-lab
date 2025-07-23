import {
  Select,
  SelectContent,
  SelectGroup,
  SelectIcon,
  SelectItem,
  SelectItemText,
  SelectPortal,
  SelectTrigger,
  SelectValue,
  SelectViewport,
} from '@radix-ui/react-select'
import { cva } from 'class-variance-authority'
import { SelectOption } from './types'

interface SearchSelectProps {
  placeholder?: string
  value?: string
  options?: SelectOption[]
  onChange?: (value: string) => void
}

export const SearchSelect = ({
  placeholder,
  value,
  options,
  onChange,
}: SearchSelectProps) => {
  return (
    <div>
      <Select defaultValue={value} onValueChange={onChange}>
        <SelectTrigger className={triggerClassName()} aria-label="Food">
          <SelectValue placeholder={placeholder} />
          <SelectIcon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="13"
              viewBox="0 0 12 13"
              fill="none"
            >
              <g id="Chevron">
                <path
                  id="Union"
                  d="M9.33426 5.4503C9.55525 5.23291 9.55525 4.88044 9.33426 4.66305C9.11328 4.44565 8.755 4.44565 8.53401 4.66305L5.99997 7.15593L3.46599 4.66311C3.245 4.44571 2.88672 4.44571 2.66574 4.66311C2.44475 4.8805 2.44475 5.23297 2.66574 5.45036L5.5916 8.32871C5.59429 8.33146 5.59701 8.33419 5.59976 8.3369C5.67227 8.40823 5.75956 8.45616 5.85194 8.48068C5.85421 8.48128 5.85648 8.48187 5.85875 8.48244C6.04618 8.52982 6.25349 8.48133 6.40024 8.33696C6.40387 8.33338 6.40744 8.32978 6.41095 8.32613L9.33426 5.4503Z"
                  fill="#3D3D4E"
                />
              </g>
            </svg>
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
      </Select>
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
  'flex items-center min-w-30 h-9 px-3 rounded-lg text-sm text-gray-900 cursor-pointer outline-0 data-[state=checked]:font-semibold hover:bg-gray-100',
)
