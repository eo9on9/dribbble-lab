import { VideoSlides } from '@/source/shared/ui/VideoSlides'
import type { Meta, StoryObj } from '@storybook/nextjs'

const ITEMS = [
  {
    videoSrc:
      'https://cdn.pixabay.com/video/2020/08/30/48569-454825064_small.mp4',
    userName: 'Rebecca Markowski',
    userImageSrc:
      'https://api.dicebear.com/7.x/adventurer/svg?seed=RebeccaMarkowski',
  },
  {
    videoSrc:
      'https://cdn.pixabay.com/video/2024/03/15/204306-923909642_small.mp4',
    userName: 'Anna Kuhar',
    userImageSrc: 'https://api.dicebear.com/7.x/adventurer/svg?seed=AnnaKuhar',
  },
]

const meta = {
  title: 'Shared/VideoSlides',
  component: VideoSlides,
  tags: ['autodocs'],
  args: {
    items: ITEMS,
  },
} satisfies Meta<typeof VideoSlides>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  decorators: [
    Story => (
      <div className="max-w-[614px]">
        <Story />
      </div>
    ),
  ],
}
