import { SearchBox } from '@/source/features/search/ui/SearchBox'
import type { Meta, StoryObj } from '@storybook/nextjs'
import { fn } from 'storybook/test'

const meta = {
  title: 'Features/SearchBox',
  component: SearchBox,
  tags: ['autodocs'],
  args: {
    onSearch: fn(),
  },
} satisfies Meta<typeof SearchBox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  decorators: [
    Story => (
      <div style={{ height: 320 }}>
        <Story />
      </div>
    ),
  ],
}
