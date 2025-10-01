import { Button } from '@/source/shared/ui/Button'
import type { Meta, StoryObj } from '@storybook/nextjs'

const meta = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'My Button',
    variant: 'primary',
    size: 'lg',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
      description: '버튼 변형',
      table: {
        type: { summary: 'primary | secondary' },
      },
    },
    size: {
      control: 'select',
      options: ['lg', 'md'],
      description: '버튼 크기',
      table: {
        type: { summary: 'lg | md' },
      },
    },
    children: {
      control: 'text',
      description: '버튼 내용',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    as: {
      control: false,
      description: '버튼 태그',
      table: {
        type: { summary: 'Element' },
      },
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
