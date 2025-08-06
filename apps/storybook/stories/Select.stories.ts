import type { Meta, StoryObj } from '@storybook/react-vite'

import { Select } from '@repo/ui/components/Select'
import { fn } from 'storybook/test'

const meta = {
  title: 'Example/Select',
  component: Select,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    placeholder: 'Select an option',
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ],
    onChange: fn(),
  },
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
