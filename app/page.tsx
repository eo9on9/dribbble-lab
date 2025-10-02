'use client'

import { SearchBox } from '@/source/features/search/ui/SearchBox'
import { Button } from '@/source/shared/ui/Button'
import { HeaderLogo } from '@/source/shared/ui/HeaderLogo'
import { LinkText } from '@/source/shared/ui/LinkText'
import { SearchBox as SearchBoxUI } from '@/source/shared/ui/SearchBox'
import Link from 'next/link'
import { useState } from 'react'

const SUGGESTIONS = ['apple', 'apple pie', 'apple pie recipe']

const SEARCH_SELECT_OPTIONS = [
  { label: 'Shots', value: 'shots' },
  { label: 'Designers', value: 'designers' },
  { label: 'Services', value: 'services' },
]

export default function Home() {
  const [searchText, setSearchText] = useState('')
  const [searchSelect, setSearchSelect] = useState('')

  return (
    <div>
      {/* <Header>
        <LeftSide>
          <MenuTrigger />
          <HeaderLogo />
          <MenuGroup />
          <SearchBox />
        </LeftSide>
        <RightSide>
          <SearchBoxTrigger />
          <SignupButton />
          <SigninButton />
        </RightSide>
      </Header> */}

      <SearchBox />

      <HeaderLogo />
      <LinkText href="#">Explore</LinkText>
      {/* <Menu mode="popup">
        <Menu.Trigger>
          <b>Explore</b>
        </Menu.Trigger>
        <Menu.SubPanel>
          <Menu.SubLink href="/popular" strong>
            Popular
          </Menu.SubLink>
          <Menu.SubLink href="/popular" strong>
            Popular
          </Menu.SubLink>
          <Menu.Divider />
          <Menu.SubLink href="#">Product Design</Menu.SubLink>
          <Menu.SubLink href="#">Product Design</Menu.SubLink>
        </Menu.SubPanel>
      </Menu>
      <Menu>
        <Menu.Link href="/">No Sub Menu</Menu.Link>
      </Menu> */}
      <SearchBoxUI
        textPlaceholder="What are you looking for?"
        textValue={searchText}
        onChangeText={v => {
          console.log('== onChangeText ==', v)
          setSearchText(v)
        }}
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
      <br />
      <div className="p-5">
        <Button as={Link} href="/" variant="primary" size="lg">
          Log in
        </Button>
        <Button as={Link} href="/" variant="primary" size="md">
          Log in
        </Button>
        <Button as={Link} href="/" variant="secondary" size="lg">
          Log in
        </Button>
        <Button as={Link} href="/" variant="secondary" size="md">
          Log in
        </Button>
      </div>
    </div>
  )
}
