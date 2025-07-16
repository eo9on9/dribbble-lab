'use client'

import { Logo, SearchBox } from '@repo/ui'
import { useState } from 'react'

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
      <SearchBox
        textPlaceholder="What are you looking for?"
        textValue={searchText}
        onChangeText={setSearchText}
        selectPlaceholder="All"
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
