import type { Meta, StoryObj } from '@storybook/nextjs'
import { HeroVideo } from './'

const meta = {
  title: 'Widgets/HeroVideo',
  component: HeroVideo,
  tags: ['autodocs'],
} satisfies Meta<typeof HeroVideo>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
