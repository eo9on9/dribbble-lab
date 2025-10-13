import { useDebouncedGetSuggestion } from '@/source/features/search/model/useDebouncedGetSuggestions'
import { CATEGORIES } from '@/source/shared/constants/categories'
import { SearchBox as SearchBoxUI } from '@/source/shared/ui/SearchBox'
import type { SearchBoxSize } from '@/source/shared/ui/SearchBox/types'
import { useState } from 'react'

export interface SearchBoxProps {
  textPlaceholder?: string
  selectDisabled?: boolean
  onSearch?: (value: string | { text: string; select: string }) => void
  size?: SearchBoxSize
}

export const SearchBox = ({
  textPlaceholder,
  selectDisabled,
  onSearch,
  size,
}: SearchBoxProps) => {
  const [textValue, setTextValue] = useState('')
  const [selectValue, setSelectValue] = useState<string>(CATEGORIES[0].value)

  const { data, isDebouncing } = useDebouncedGetSuggestion(textValue)

  const handleSearch = (value: { text: string; select: string }) => {
    if (selectDisabled) {
      onSearch?.(value.text)
    } else {
      onSearch?.(value)
    }
  }

  const textSuggestions = isDebouncing ? [] : data?.suggestions

  return (
    <SearchBoxUI
      textPlaceholder={textPlaceholder}
      textValue={textValue}
      onChangeText={setTextValue}
      textSuggestions={textSuggestions}
      selectValue={selectValue}
      selectOptions={selectDisabled ? undefined : CATEGORIES}
      onChangeSelect={setSelectValue}
      onSearch={handleSearch}
      size={size}
    />
  )
}
