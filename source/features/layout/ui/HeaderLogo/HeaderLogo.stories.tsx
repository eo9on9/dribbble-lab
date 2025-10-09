import { HeaderLogo } from '@/source/features/layout/ui/HeaderLogo'
import type { Meta, StoryObj } from '@storybook/nextjs'

const meta = {
  title: 'Features/HeaderLogo',
  component: HeaderLogo,
  tags: ['autodocs'],
} satisfies Meta<typeof HeaderLogo>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
