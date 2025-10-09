import { Footer } from '@/source/widgets/layout/ui/Footer'
import type { Meta, StoryObj } from '@storybook/nextjs'

const meta = {
  title: 'Widgets/Footer',
  component: Footer,
  tags: ['autodocs'],
} satisfies Meta<typeof Footer>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
