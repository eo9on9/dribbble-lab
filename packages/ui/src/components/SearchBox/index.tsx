import { Container, SearchButton, Select, TextField } from './components'
import { BoxControlProvider, SuggestionControlProvider } from './contexts'
import { SelectOption } from './types'

interface SearchBoxProps {
  textPlaceholder?: string
  textValue: string
  onChangeText: (value: string) => void

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
