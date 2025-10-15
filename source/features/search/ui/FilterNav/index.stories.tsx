import type { Meta, StoryObj } from '@storybook/nextjs'
import { FilterNav } from './'

const meta = {
  title: 'Features/FilterNav',
  component: FilterNav,
  tags: ['autodocs'],
} satisfies Meta<typeof FilterNav>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
