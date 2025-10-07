import { Button } from '@/source/shared/ui/Button'
import { LinkText } from '@/source/shared/ui/LinkText'
import type { Meta, StoryObj } from '@storybook/nextjs'

const meta = {
  title: 'Shared/LinkText',
  component: LinkText,
  tags: ['autodocs'],
  args: {
    children: 'My Link',
  },
  argTypes: {
    as: {
      control: false,
      table: {
        type: { summary: 'Element' },
      },
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
