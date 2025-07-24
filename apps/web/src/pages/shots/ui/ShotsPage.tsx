'use client'

import { Logo, SearchBox } from '@repo/ui/components'

import { ClearIcon } from '@repo/ui/icons'
import { useState } from 'react'

const SUGGESTIONS = ['apple', 'apple pie', 'apple pie recipe']

const SEARCH_SELECT_OPTIONS = [
  { label: 'Shots', value: 'shots' },
  { label: 'Designers', value: 'designers' },
  { label: 'Services', value: 'services' },
]

export const ShotsPage = () => {
  const [searchText, setSearchText] = useState('')
  const [searchSelect, setSearchSelect] = useState('')

  return (
    <div className="p-9">
      <div className="w-20 mb-6">
        <Logo />
      </div>
      <ClearIcon />
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
    </div>
  )
}
