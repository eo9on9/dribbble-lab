import { SearchBox } from '@/source/shared/ui/SearchBox'
import type { Meta, StoryObj } from '@storybook/nextjs'
import { fn } from 'storybook/test'

const SUGGESTIONS = ['apple', 'apple pie', 'apple pie recipe']

const SEARCH_SELECT_OPTIONS = [
  { label: 'Shots', value: 'shots' },
  { label: 'Designers', value: 'designers' },
  { label: 'Services', value: 'services' },
]

const meta = {
  title: 'Shared/SearchBox',
  component: SearchBox,
  tags: ['autodocs'],
  args: {
    textPlaceholder: 'What are you looking for?',
    textValue: '',
    onChangeText: fn(),
    textSuggestions: SUGGESTIONS,
    selectPlaceholder: 'Select',
    selectValue: '',
    selectOptions: SEARCH_SELECT_OPTIONS,
    onChangeSelect: fn(),
    onSearch: fn(),
  },
  argTypes: {
    textPlaceholder: {
      control: 'text',
      description: '텍스트 입력 필드 플레이스홀더',
    },
    textValue: {
      control: 'text',
      description: '텍스트 입력 필드 값',
    },
    onChangeText: {
      description: '텍스트 입력 필드 값 변경 함수',
    },
    textSuggestions: {
      control: 'object',
      description: '텍스트 입력 필드 제안 항목',
    },
    selectPlaceholder: {
      control: 'text',
      description: '선택 필드 플레이스홀더',
    },
    selectValue: {
      control: 'text',
      description: '선택 필드 값',
    },
    selectOptions: {
      control: 'object',
      description: '선택 필드 옵션',
    },
    onChangeSelect: {
      description: '선택 필드 값 변경 함수',
    },
    onSearch: {
      description: '검색 함수',
    },
  },
} satisfies Meta<typeof SearchBox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
