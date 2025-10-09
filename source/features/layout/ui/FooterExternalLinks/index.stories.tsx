import { FooterExternalLinks } from '@/source/features/layout/ui/FooterExternalLinks'
import type { Meta, StoryObj } from '@storybook/nextjs'

const meta = {
  title: 'Features/FooterExternalLinks',
  component: FooterExternalLinks,
  tags: ['autodocs'],
} satisfies Meta<typeof FooterExternalLinks>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
