import type { Meta, StoryObj } from '@storybook/nextjs'

import { Menu } from '@/source/shared/ui/Menu'

const meta = {
  title: 'Example/Menu',
  component: Menu,
  tags: ['autodocs'],
  args: {
    mode: 'popup',
  },
  argTypes: {
    mode: {
      control: 'radio',
      options: ['popup', 'accordion'],
      description: 'Mode of the menu',
    },
  },
} satisfies Meta<typeof Menu>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: args => (
    <>
      <Menu {...args}>
        <Menu.Trigger>With Sub Menu</Menu.Trigger>
        <Menu.SubPanel>
          <Menu.SubLink href="#" strong>
            Menu 1
          </Menu.SubLink>
          <Menu.SubLink href="#" strong>
            Menu 2
          </Menu.SubLink>
          <Menu.Divider />
          <Menu.SubLink href="#">Menu 3</Menu.SubLink>
          <Menu.SubLink href="#">Menu 4</Menu.SubLink>
        </Menu.SubPanel>
      </Menu>
      <Menu {...args}>
        <Menu.Link href="#" className="font-semibold">
          Without Sub Menu
        </Menu.Link>
      </Menu>
    </>
  ),
  decorators: [
    Story => (
      <div style={{ position: 'relative', height: 320 }}>
        <div className="flex flex-wrap gap-2">
          <Story />
        </div>
      </div>
    ),
  ],
}
