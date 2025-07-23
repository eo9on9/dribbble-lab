'use client'

import { cva } from 'class-variance-authority'
import { useEffect, useRef, useState } from 'react'
import { SearchButton } from './SearchButton'
import { SearchInput } from './SearchInput'
import { SearchSelect } from './SearchSelect'
import { SelectOption } from './types'

const SUGGESTIONS = ['apple', 'apple pie', 'apple pie recipe']

interface SearchBoxProps {
  textPlaceholder?: string
  textValue?: string
  onChangeText?: (value: string) => void

  selectPlaceholder?: string
  selectValue?: string
  selectOptions?: SelectOption[]
  onChangeSelect?: (value: string) => void

  onSearch?: (value: { text: string; select: string }) => void
}

export const SearchBox = ({
  textPlaceholder,
  textValue = '',
  onChangeText,

  selectPlaceholder,
  selectValue = '',
  selectOptions = [],
  onChangeSelect,

  onSearch,
}: SearchBoxProps) => {
  const [suggestionValue, setSuggestionValue] = useState('')
  const [suggestionIndex, setSuggestionIndex] = useState(-1)

  const containerRef = useRef<HTMLDivElement>(null)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setIsMounted] = useState(false)

  useEffect(() => setIsMounted(true), [])

  return (
    <div className={wrapClassName()} ref={containerRef}>
      <div className={boxClassName()}>
        <SearchInput
          portalRoot={containerRef.current}
          placeholder={textPlaceholder}
          value={textValue}
          onChange={value => {
            setSuggestionIndex(-1)
            setSuggestionValue(value)
            onChangeText?.(value)
          }}
          onKeyDownArrowDown={() => {
            if (suggestionIndex !== SUGGESTIONS.length - 1) {
              setSuggestionIndex(suggestionIndex + 1)
              onChangeText?.(SUGGESTIONS[suggestionIndex + 1]!)
            } else {
              setSuggestionIndex(-1)
              onChangeText?.(suggestionValue)
            }
          }}
          onKeyDownArrowUp={() => {
            if (suggestionIndex !== -1) {
              setSuggestionIndex(suggestionIndex - 1)
              onChangeText?.(SUGGESTIONS[suggestionIndex - 1]!)
            } else {
              setSuggestionIndex(SUGGESTIONS.length - 1)
              onChangeText?.(suggestionValue)
            }
          }}
        />
        <SearchSelect
          placeholder={selectPlaceholder}
          value={selectValue}
          options={selectOptions}
          onChange={onChangeSelect}
        />
        <SearchButton
          onClick={() => onSearch?.({ text: textValue, select: selectValue })}
        />
      </div>
      {/* {textValue && (
          <Suggestion
            activeIndex={suggestionIndex}
            suggestions={SUGGESTIONS}
            value={suggestionValue}
            onClickSuggestion={s => {
              setSuggestionIndex(-1)
              onChangeText?.(s)
            }}
            onMouseEnterSuggestion={s =>
              setSuggestionIndex(SUGGESTIONS.indexOf(s))
            }
            onMouseLeaveSuggestion={() => setSuggestionIndex(-1)}
          />
        )} */}
    </div>
  )
}

const wrapClassName = cva('relative')

const boxClassName = cva(
  'flex justify-center items-center gap-3 w-full h-14 bg-gray-100 rounded-full p-2 pl-6 border-2 border-gray-100 hover:bg-white hover:border-pink-200 focus-within:bg-white focus-within:border-pink-200 transition',
)
