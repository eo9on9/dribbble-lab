import { cva } from 'class-variance-authority'
import { SearchInputPanel } from './SearchInputPanel'

interface SearchInputProps {
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  onKeyDownArrowDown?: () => void
  onKeyDownArrowUp?: () => void

  portalRoot?: HTMLElement | null
}

export const SearchInput = ({
  placeholder,
  value,
  onChange,
  onKeyDownArrowDown,
  onKeyDownArrowUp,

  portalRoot,
}: SearchInputProps) => {
  return (
    <>
      <input
        className={inputClassName()}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={e => onChange?.(e.target.value)}
        onKeyDown={e => {
          if (e.key === 'ArrowDown') {
            onKeyDownArrowDown?.()
          } else if (e.key === 'ArrowUp') {
            onKeyDownArrowUp?.()
          }
        }}
      />
      <SearchInputPanel portalRoot={portalRoot} />
    </>
  )
}

const inputClassName = cva('flex-auto text-sm text-ellipsis outline-0')

const portalClassName = cva('absolute top-0 left-0 w-full h-full bg-red-200')
