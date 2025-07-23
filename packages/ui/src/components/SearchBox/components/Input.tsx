import { cva } from 'class-variance-authority'
import { ChangeEvent, FocusEvent, KeyboardEvent, useRef } from 'react'
import { useSuggestionControlContext } from '../contexts'
import { ClearButton } from './ClearButton'
import { Suggestion } from './Suggestion'

interface InputProps {
  placeholder?: string
  value: string
  onChange: (value: string) => void
}

export const Input = ({ placeholder, value, onChange }: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const suggestionRef = useRef<HTMLDivElement>(null)

  const {
    suggestions,
    setIsOpen: setIsOpenSuggestion,
    activeIndex: activeSuggestionIndex,
    setActiveIndex: setActiveSuggestionIndex,
    baseText: baseSuggestionText,
    setBaseText: setBaseSuggestionText,
  } = useSuggestionControlContext()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target

    if (value.length > 0) {
      setIsOpenSuggestion(true)
    } else {
      setIsOpenSuggestion(false)
    }

    setBaseSuggestionText(value)
    onChange?.(e.target.value)
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()

      const nextIndex = activeSuggestionIndex + 1

      if (nextIndex < suggestions.length) {
        setActiveSuggestionIndex(nextIndex)
      } else {
        setActiveSuggestionIndex(-1)
      }

      onChange?.(suggestions[nextIndex] ?? baseSuggestionText)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()

      const prevIndex = activeSuggestionIndex - 1

      if (prevIndex >= -1) {
        setActiveSuggestionIndex(prevIndex)
      } else {
        setActiveSuggestionIndex(suggestions.length - 1)
      }

      onChange?.(suggestions[prevIndex] ?? baseSuggestionText)
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
    onChange?.(suggestion)

    inputRef.current?.focus()

    setActiveSuggestionIndex(-1)
    setIsOpenSuggestion(false)
  }

  const handleClear = () => {
    setBaseSuggestionText('')
    onChange?.('')

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
      {value.length > 0 && (
        <>
          <ClearButton onClick={handleClear} />
          <Suggestion ref={suggestionRef} onClick={handleSuggestionClick} />
        </>
      )}
    </div>
  )
}

const wrapClassName = cva('flex flex-auto h-full items-center outline-0')

const inputClassName = cva(
  'flex-auto pl-4 h-full text-sm text-ellipsis outline-0',
)
