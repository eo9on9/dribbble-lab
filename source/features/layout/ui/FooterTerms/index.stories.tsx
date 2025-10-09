import { FooterTerms } from '@/source/features/layout/ui/FooterTerms'
import type { Meta, StoryObj } from '@storybook/nextjs'

const meta = {
  title: 'Features/FooterTerms',
  component: FooterTerms,
  tags: ['autodocs'],
} satisfies Meta<typeof FooterTerms>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
