import type { Meta, StoryObj } from '@storybook/nextjs'
import { fn } from 'storybook/test'
import { Select } from './'

const OPTIONS = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Cherry', value: 'cherry' },
]

const meta = {
  title: 'Shared/Select',
  component: Select,
  tags: ['autodocs'],
  args: {
    size: 'md',
    options: OPTIONS,
    placeholder: 'Select',
    onChange: fn(),
  },
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
