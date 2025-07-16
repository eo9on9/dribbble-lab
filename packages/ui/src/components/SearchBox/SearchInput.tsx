import { cva } from 'class-variance-authority'

interface SearchInputProps {
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
}

export const SearchInput = ({
  placeholder,
  value,
  onChange,
}: SearchInputProps) => {
  return (
    <input
      className={inputClassName()}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={e => onChange?.(e.target.value)}
    />
  )
}

const inputClassName = cva('flex-auto text-sm text-ellipsis outline-0')
