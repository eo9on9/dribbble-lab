import { HeroSearch } from '@/source/widgets/main/ui/HeroSearch'
import type { Meta, StoryObj } from '@storybook/nextjs'

const meta = {
  title: 'Widgets/HeroSearch',
  component: HeroSearch,
  tags: ['autodocs'],
} satisfies Meta<typeof HeroSearch>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  decorators: [
    Story => (
      <div style={{ height: 480 }}>
        <Story />
      </div>
    ),
  ],
}
