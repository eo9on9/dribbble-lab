import { MenuGroup } from '@/source/features/layout/ui/MenuGroup'
import type { Meta, StoryObj } from '@storybook/nextjs'

const meta = {
  title: 'Features/MenuGroup',
  component: MenuGroup,
  tags: ['autodocs'],
  args: {
    device: 'pc',
    isOpen: false,
  },
} satisfies Meta<typeof MenuGroup>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  decorators: [
    Story => (
      <div style={{ height: 560 }}>
        <Story />
      </div>
    ),
  ],
}
