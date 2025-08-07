import { SearchIcon } from '@repo/ui/icons'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Input } from '@repo/ui/components/Input'
import { fn } from 'storybook/test'

const meta = {
  title: 'Example/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    placeholder: 'Please enter your name',
    onChange: fn(),
    prefix: '',
  },
  argTypes: {
    icon: {
      control: false,
      description: '좌측 아이콘',
      table: {
        type: {
          summary: 'ReactNode',
        },
      },
    },
    prefix: {
      control: 'text',
      description: '좌측 접두사',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithPrefix: Story = {
  args: {
    prefix: '#',
    defaultValue: 'FFFFFF',
  },
}

export const WithIcon: Story = {
  render: args => <Input {...args} icon={<SearchIcon />} />,
}
