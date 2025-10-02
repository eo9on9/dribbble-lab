import { MenuGroupTrigger } from '@/source/features/layout/ui/MenuGroupTrigger'
import type { Meta, StoryObj } from '@storybook/nextjs'
import { fn } from 'storybook/test'

const meta = {
  title: 'Features/MenuGroupTrigger',
  component: MenuGroupTrigger,
  tags: ['autodocs'],
  args: {
    isOpen: false,
    onClick: fn(),
  },
} satisfies Meta<typeof MenuGroupTrigger>

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
