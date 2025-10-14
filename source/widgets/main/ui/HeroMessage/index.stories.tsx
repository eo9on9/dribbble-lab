import type { Meta, StoryObj } from '@storybook/nextjs'
import { HeroMessage } from './'

const meta = {
  title: 'Widgets/HeroMessage',
  component: HeroMessage,
  tags: ['autodocs'],
} satisfies Meta<typeof HeroMessage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
