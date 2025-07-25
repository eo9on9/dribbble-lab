import { cva } from 'class-variance-authority'
import {
  type ChangeEvent,
  type FocusEvent,
  type KeyboardEvent,
  useRef,
} from 'react'
import { useSuggestionControlContext } from '../contexts'
import { ClearButton } from './ClearButton'
import { Suggestion } from './Suggestion'

interface TextFieldProps {
  placeholder?: string
  value: string
  onChange: (value: string) => void
}

export const TextField = ({ placeholder, value, onChange }: TextFieldProps) => {
  const {
    suggestions,
    setIsOpen: setIsOpenSuggestion,
    activeIndex: activeSuggestionIndex,
    setActiveIndex: setActiveSuggestionIndex,
    baseText: baseSuggestionText,
    setBaseText: setBaseSuggestionText,
  } = useSuggestionControlContext()

  const inputRef = useRef<HTMLInputElement>(null)
  const suggestionRef = useRef<HTMLDivElement>(null)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target

    setIsOpenSuggestion(value.length > 0)

    setBaseSuggestionText(value)
    onChange(e.target.value)
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()

      const nextIndex =
        activeSuggestionIndex + 1 >= suggestions.length
          ? -1
          : activeSuggestionIndex + 1

      setActiveSuggestionIndex(nextIndex)
      onChange(suggestions[nextIndex] ?? baseSuggestionText)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()

      const prevIndex =
        activeSuggestionIndex - 1 < -1
          ? suggestions.length - 1
          : activeSuggestionIndex - 1

      setActiveSuggestionIndex(prevIndex)
      onChange(suggestions[prevIndex] ?? baseSuggestionText)
    } else if (e.key === 'Enter') {
      setActiveSuggestionIndex(-1)
      setIsOpenSuggestion(false)
    }
  }

  const handleFocus = () => {
    setIsOpenSuggestion(true)
  }

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    if (suggestionRef.current?.contains(e.relatedTarget)) return

    setActiveSuggestionIndex(-1)
    setIsOpenSuggestion(false)
  }

  const handleSuggestionClick = (suggestion: string) => {
    setBaseSuggestionText(suggestion)
    onChange(suggestion)

    inputRef.current?.focus()

    setActiveSuggestionIndex(-1)
    setIsOpenSuggestion(false)
  }

  const handleClear = () => {
    setBaseSuggestionText('')
    onChange('')

    inputRef.current?.focus()
  }

  return (
    <div className={wrapClassName()}>
      <input
        ref={inputRef}
        className={inputClassName()}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <ClearButton value={value} onClick={handleClear} />
      <Suggestion
        ref={suggestionRef}
        value={value}
        onClick={handleSuggestionClick}
      />
    </div>
  )
}

const wrapClassName = cva('flex flex-auto h-full items-center outline-0')

const inputClassName = cva(
  'flex-auto pl-4 h-full text-sm text-ellipsis outline-0',
)
