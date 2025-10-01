import { BoxControlProvider } from '@/source/shared/ui/SearchBox/BoxControlContext'
import { Container } from '@/source/shared/ui/SearchBox/Container'
import { SearchButton } from '@/source/shared/ui/SearchBox/SearchButton'
import { Select } from '@/source/shared/ui/SearchBox/Select'
import { SuggestionControlProvider } from '@/source/shared/ui/SearchBox/SuggestionControlContext'
import { TextField } from '@/source/shared/ui/SearchBox/TextField'
import { type SelectOption } from './types'

interface SearchBoxProps {
  textPlaceholder?: string
  textValue?: string
  onChangeText?: (value: string) => void

  selectPlaceholder?: string
  selectValue?: string
  selectOptions?: SelectOption[]
  onChangeSelect?: (value: string) => void

  onSearch?: (value: { text: string; select: string }) => void

  textSuggestions?: string[]
}

export const SearchBox = ({
  textPlaceholder,
  textValue = '',
  onChangeText,
  selectPlaceholder,
  selectValue = '',
  selectOptions,
  onChangeSelect,
  onSearch,
  textSuggestions = [],
}: SearchBoxProps) => {
  return (
    <BoxControlProvider>
      <SuggestionControlProvider suggestions={textSuggestions}>
        <Container>
          <TextField
            placeholder={textPlaceholder}
            value={textValue}
            onChange={onChangeText}
          />
          <Select
            placeholder={selectPlaceholder}
            value={selectValue}
            options={selectOptions}
            onChange={onChangeSelect}
          />
          <SearchButton
            onClick={() => onSearch?.({ text: textValue, select: selectValue })}
          />
        </Container>
      </SuggestionControlProvider>
    </BoxControlProvider>
  )
}
