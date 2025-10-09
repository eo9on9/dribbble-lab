import { FooterInternalLinks } from '@/source/features/layout/ui/FooterInternalLinks'
import type { Meta, StoryObj } from '@storybook/nextjs'

const meta = {
  title: 'Features/FooterInternalLinks',
  component: FooterInternalLinks,
  tags: ['autodocs'],
} satisfies Meta<typeof FooterInternalLinks>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
