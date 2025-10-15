import { ColorsIcon, SearchBoldIcon } from '@/source/shared/ui/icons'
import type { Meta, StoryObj } from '@storybook/nextjs'
import { fn } from 'storybook/test'
import { Input } from './'

const meta = {
  title: 'Shared/Input',
  component: Input,
  tags: ['autodocs'],
  args: {
    placeholder: '',
    size: 'md',
    onChange: fn(),
  },
  argTypes: {
    placeholder: {
      control: 'text',
    },
    defaultValue: {
      control: 'text',
    },
    value: {
      control: 'text',
    },
    icon: {
      control: false,
    },
    onChange: {
      control: false,
    },
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithIcon: Story = {
  args: {
    icon: <SearchBoldIcon />,
  },
}

export const WithIconPrefix: Story = {
  args: {
    icon: <ColorsIcon />,
    prefix: '#',
  },
}
