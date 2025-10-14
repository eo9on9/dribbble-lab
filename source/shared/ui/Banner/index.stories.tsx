import { NewBadge } from '@/source/shared/ui/badges'
import { MatchIcon } from '@/source/shared/ui/icons'
import type { Meta, StoryObj } from '@storybook/nextjs'
import { Banner } from './'

const meta = {
  title: 'Shared/Banner',
  component: Banner,
  tags: ['autodocs'],
  args: {
    href: '#',
  },
} satisfies Meta<typeof Banner>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: args => (
    <Banner {...args}>
      <Banner.Button>
        <Banner.ButtonIcon>
          <MatchIcon />
        </Banner.ButtonIcon>
        <Banner.ButtonText>Lorem ipsum</Banner.ButtonText>
        <Banner.ButtonBadge>
          <NewBadge />
        </Banner.ButtonBadge>
      </Banner.Button>
      <Banner.Description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Banner.Description>
    </Banner>
  ),
}
