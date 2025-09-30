import type { Meta, StoryObj } from '@storybook/nextjs'

import { Menu } from '@/source/shared/ui/Menu'

const meta = {
  title: 'Example/Menu',
  component: Menu,
  tags: ['autodocs'],
  args: {
    device: 'pc',
  },
  argTypes: {
    device: {
      control: 'radio',
      options: ['pc', 'tablet', 'mobile'],
      table: {
        category: 'Menu',
      },
    },
    href: {
      control: 'text',
      table: {
        category: 'Link | SubLink',
      },
    },
    strong: {
      control: 'boolean',
      table: {
        category: 'SubLink',
      },
    },
  },
} satisfies Meta<typeof Menu | typeof Menu.Link | typeof Menu.SubLink>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: args => (
    <Menu {...args}>
      <Menu.Trigger>Explore</Menu.Trigger>
      <Menu.SubPanel>
        <Menu.SubLink href="#" strong>
          Highlighted Menu 1
        </Menu.SubLink>
        <Menu.SubLink href="#" strong>
          Highlighted Menu 2
        </Menu.SubLink>
        <Menu.Divider />
        <Menu.SubLink href="#">Menu 1</Menu.SubLink>
        <Menu.SubLink href="#">Menu 2</Menu.SubLink>
      </Menu.SubPanel>
    </Menu>
  ),
  decorators: [
    Story => (
      <div style={{ position: 'relative', height: 320 }}>
        <Story />
      </div>
    ),
  ],
}

export const WithoutSubMenu: Story = {
  render: args => (
    <Menu {...args}>
      <Menu.Link href="#" className="font-semibold">
        No Sub Menu
      </Menu.Link>
    </Menu>
  ),
}
