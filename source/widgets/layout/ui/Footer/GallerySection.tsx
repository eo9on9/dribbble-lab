import { MarqueeGallary } from '@/source/shared/ui/MarqueeGallary'
import { cva } from 'class-variance-authority'

export const FOOTER_GALLARY_ITEMS = [
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

export const GallerySection = () => {
  return (
    <div className={cn()}>
      <MarqueeGallary items={FOOTER_GALLARY_ITEMS} />
    </div>
  )
}

const cn = cva([
  /** layout */
  'pt-[60px]',
])
