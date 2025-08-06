'use client'

import { Input } from '@repo/ui/components/Input'
import { Logo } from '@repo/ui/components/Logo'
import { SearchBox } from '@repo/ui/components/SearchBox'
import { Select } from '@repo/ui/components/Select'
import { CheckIcon } from '@repo/ui/icons'
import { type FC, useState } from 'react'

const SUGGESTIONS = ['apple', 'apple pie', 'apple pie recipe']

const SEARCH_SELECT_OPTIONS = [
  { label: 'Shots', value: 'shots' },
  { label: 'Designers', value: 'designers' },
  { label: 'Services', value: 'services' },
]

export const ShotsPage: FC = () => {
  const [searchText, setSearchText] = useState('')
  const [searchSelect, setSearchSelect] = useState('')

  const [selectValue, setSelectValue] = useState('')

  const [inputValue, setInputValue] = useState('')

  return (
    <div className="p-9">
      <div className="w-20 mb-6">
        <Logo />
      </div>
      <SearchBox
        textPlaceholder="What are you looking for?"
        textValue={searchText}
        onChangeText={setSearchText}
        textSuggestions={SUGGESTIONS}
        selectPlaceholder="Select"
        selectValue={searchSelect}
        selectOptions={SEARCH_SELECT_OPTIONS}
        onChangeSelect={setSearchSelect}
        onSearch={v => {
          console.log(v)
        }}
      />
      <br />
      <br />
      <Select
        value={selectValue}
        onChange={setSelectValue}
        options={[
          { label: 'Following', value: 'following' },
          { label: 'Popular', value: 'popular' },
          { label: 'New & Noteworthy', value: 'recent' },
        ]}
        placeholder="Select"
      />
      <Input
        icon={<CheckIcon width={16} height={16} />}
        // defaultValue="test"
        value={inputValue}
        prefix="#"
        onChange={e => setInputValue(e.target.value)}
        onFocus={() => {
          console.log('focus')
        }}
        onBlur={() => {
          console.log('blur')
        }}
      />
      {/* <Input /> */}
    </div>
  )
}
