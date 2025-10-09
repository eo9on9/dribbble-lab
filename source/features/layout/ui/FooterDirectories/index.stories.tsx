import { FooterDirectories } from '@/source/features/layout/ui/FooterDirectories'
import type { Meta, StoryObj } from '@storybook/nextjs'

const meta = {
  title: 'Features/FooterDirectories',
  component: FooterDirectories,
  tags: ['autodocs'],
} satisfies Meta<typeof FooterDirectories>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
