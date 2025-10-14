import type { Meta, StoryObj } from '@storybook/nextjs'
import { Hero } from './'

const meta = {
  title: 'Pages/Hero',
  component: Hero,
  tags: ['autodocs'],
} satisfies Meta<typeof Hero>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
