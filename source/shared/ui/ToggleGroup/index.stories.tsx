import type { Meta, StoryObj } from '@storybook/nextjs'
import { fn } from 'storybook/test'
import { ToggleGroup } from './'

const meta = {
  title: 'Shared/ToggleGroup',
  component: ToggleGroup,
  tags: ['autodocs'],
  args: {
    options: [
      { label: 'Apple', value: 'apple' },
      { label: 'Banana', value: 'banana' },
      { label: 'Cherry', value: 'cherry' },
      { label: 'Elderberry', value: 'elderberry' },
      { label: 'Fig', value: 'fig' },
      { label: 'Grape', value: 'grape' },
      { label: 'Honeydew', value: 'honeydew' },
      { label: 'Kiwi', value: 'kiwi' },
      { label: 'Lemon', value: 'lemon' },
    ],
    defaultValue: 'apple',
    onChange: fn(),
  },
} satisfies Meta<typeof ToggleGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  decorators: [
    Story => (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Story />
      </div>
    ),
  ],
}
