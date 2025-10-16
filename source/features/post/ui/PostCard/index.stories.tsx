import type { Meta, StoryObj } from '@storybook/nextjs'
import { fn } from 'storybook/test'
import { PostCard } from '.'

const meta = {
  title: 'Features/PostCard',
  component: PostCard,
  tags: ['autodocs'],
  args: {
    title: 'Lorem ipsum',
    imgSrc: 'https://picsum.photos/seed/picsum/400/300',
    userImgSrc:
      'https://api.dicebear.com/7.x/adventurer/svg?seed=RebeccaMarkowski',
    likeCount: 32,
    viewCount: 12345678,
    userName: 'John Doe John Doe John Doe John Doe John Doe',
    userType: 'team',
    href: '#',
    isLiked: false,
    isBookmarked: false,
    onLikeClick: fn(),
    onBookmarkClick: fn(),
  },
} satisfies Meta<typeof PostCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
