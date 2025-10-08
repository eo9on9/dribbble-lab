import { Header } from '@/source/widgets/layout/ui/Header'
import type { Meta, StoryObj } from '@storybook/nextjs'

const meta = {
  title: 'Widgets/Header',
  component: Header,
  tags: ['autodocs'],
  args: {
    isFixed: false,
    isSearchToggle: false,
  },
} satisfies Meta<typeof Header>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  decorators: [
    Story => (
      <div>
        <Story />
        <div style={{ height: 1600, border: '2px solid skyblue' }} />
      </div>
    ),
  ],
}
