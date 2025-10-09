import { FooterLogo } from '@/source/features/layout/ui/FooterLogo'
import type { Meta, StoryObj } from '@storybook/nextjs'

const meta = {
  title: 'Features/FooterLogo',
  component: FooterLogo,
  tags: ['autodocs'],
} satisfies Meta<typeof FooterLogo>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
