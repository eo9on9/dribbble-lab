import { IntroMessage } from '@/source/features/main/ui/IntroMessage'
import type { Meta, StoryObj } from '@storybook/nextjs'

const meta = {
  title: 'Features/IntroMessage',
  component: IntroMessage,
  tags: ['autodocs'],
} satisfies Meta<typeof IntroMessage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
