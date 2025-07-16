'use client'

import { cva } from 'class-variance-authority'
import { SearchButton } from './SearchButton'
import { SearchInput } from './SearchInput'
import { SearchSelect } from './SearchSelect'
import { SelectOption } from './types'

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
  return (
    <div className={wrapClassName()}>
      <SearchInput
        placeholder={textPlaceholder}
        value={textValue}
        onChange={onChangeText}
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
  )
}

const wrapClassName = cva(
  'flex justify-center items-center gap-3 w-full h-14 bg-gray-100 rounded-full p-2 pl-6 border-2 border-gray-100 hover:bg-white hover:border-pink-200 focus-within:bg-white focus-within:border-pink-200 transition',
)
