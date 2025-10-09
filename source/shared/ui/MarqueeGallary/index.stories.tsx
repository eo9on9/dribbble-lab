import { MarqueeGallary } from '@/source/shared/ui/MarqueeGallary'
import type { Meta, StoryObj } from '@storybook/nextjs'

const MARQUEE_GALLARY_ITEMS = [
  {
    title: 'Print',
    imageSrc: '/assets/images/marquee-print.webp',
    href: '#',
  },
  {
    title: 'Typography',
    imageSrc: '/assets/images/marquee-typography.webp',
    href: '#',
  },
  {
    title: 'Illustration',
    imageSrc: '/assets/images/marquee-illustration.webp',
    href: '#',
  },
  {
    title: 'Animation',
    imageSrc: '/assets/images/marquee-animation.webp',
    href: '#',
  },
  {
    title: 'Mobile',
    imageSrc: '/assets/images/marquee-mobile.webp',
    href: '#',
  },
  {
    title: 'Branding',
    imageSrc: '/assets/images/marquee-branding.webp',
    href: '#',
  },
  {
    title: 'Product Design',
    imageSrc: '/assets/images/marquee-product_design.webp',
    href: '#',
  },
  {
    title: 'Web Design',
    imageSrc: '/assets/images/marquee-web_design.webp',
    href: '#',
  },
]

const meta = {
  title: 'Shared/MarqueeGallary',
  component: MarqueeGallary,
  tags: ['autodocs'],
  args: {
    items: MARQUEE_GALLARY_ITEMS,
  },
} satisfies Meta<typeof MarqueeGallary>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  // decorators: [
  //   Story => (
  //     <div>
  //       <Story />
  //     </div>
  //   ),
  // ],
}
